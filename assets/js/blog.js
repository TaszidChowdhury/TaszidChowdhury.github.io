// Function to parse frontmatter from markdown content
function parseFrontmatter(content) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
    const match = content.match(frontmatterRegex);
    
    if (match) {
        const frontmatter = match[1];
        const metadata = {};
        
        frontmatter.split('\n').forEach(line => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length > 0) {
                const value = valueParts.join(':').trim();
                // Handle arrays and strings
                if (value.startsWith('[') && value.endsWith(']')) {
                    metadata[key.trim()] = JSON.parse(value);
                } else {
                    metadata[key.trim()] = value.replace(/^["']|["']$/g, '');
                }
            }
        });
        
        return {
            metadata,
            content: content.replace(frontmatterRegex, '').trim()
        };
    }
    
    return { metadata: {}, content };
}

// Function to convert markdown to HTML
function convertMarkdownToHTML(markdown) {
    // Convert headers
    markdown = markdown.replace(/^# (.*$)/gm, '<h1>$1</h1>');
    markdown = markdown.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    markdown = markdown.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    
    // Convert bold and italic
    markdown = markdown.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    markdown = markdown.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Convert lists
    markdown = markdown.replace(/^\s*\d+\.\s+(.*$)/gm, '<li>$1</li>');
    markdown = markdown.replace(/^\s*-\s+(.*$)/gm, '<li>$1</li>');
    markdown = markdown.replace(/(<li>.*<\/li>\n)+/g, '<ol>$&</ol>');
    
    // Convert links
    markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    
    // Convert paragraphs
    markdown = markdown.replace(/^(?!<[a-z])(.*$)/gm, '<p>$1</p>');
    
    return markdown;
}

// Function to create a URL-friendly slug from a title
function createSlug(title) {
    return title.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

// Function to load and display blog posts
async function loadBlogPosts() {
    try {
        const response = await fetch('blog_posts/getting-started-with-cybersecurity.md');
        const markdown = await response.text();
        
        const { metadata, content } = parseFrontmatter(markdown);
        const slug = createSlug(metadata.title);
        
        // Create blog post card
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <div class="blog-image">
                <img src="${metadata.image}" alt="${metadata.title}">
            </div>
            <div class="blog-content">
                <h2 class="blog-title">${metadata.title}</h2>
                <div class="blog-meta">
                    <span class="date">${metadata.date}</span>
                    <span class="author">By ${metadata.author}</span>
                </div>
                <div class="blog-tags">
                    ${metadata.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <p class="blog-excerpt">${metadata.excerpt}</p>
                <a href="blog-post.html?post=${slug}" class="read-more">Read More</a>
            </div>
        `;
        
        // Add to the page
        const blogContainer = document.querySelector('#blog-content');
        blogContainer.appendChild(blogCard);
        
    } catch (error) {
        console.error('Error loading blog post:', error);
    }
}

// Function to load and display a single blog post
async function loadBlogPost() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const postSlug = urlParams.get('post');
        
        if (!postSlug) {
            window.location.href = 'blog.html';
            return;
        }
        
        const response = await fetch('blog_posts/getting-started-with-cybersecurity.md');
        const markdown = await response.text();
        
        const { metadata, content } = parseFrontmatter(markdown);
        const htmlContent = convertMarkdownToHTML(content);
        
        // Update page title
        document.title = `${metadata.title} | Taszid Chowdhury`;
        
        // Create blog post container
        const blogPost = document.createElement('article');
        blogPost.className = 'blog-post';
        blogPost.innerHTML = `
            <header class="blog-post-header">
                <h1>${metadata.title}</h1>
                <div class="blog-post-meta">
                    <span class="date">${metadata.date}</span>
                    <span class="author">By ${metadata.author}</span>
                </div>
                <div class="blog-post-tags">
                    ${metadata.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </header>
            <div class="blog-post-content">
                ${htmlContent}
            </div>
        `;
        
        // Add to the page
        const blogContainer = document.querySelector('#blog-post-content');
        blogContainer.appendChild(blogPost);
        
    } catch (error) {
        console.error('Error loading blog post:', error);
    }
}

// Load appropriate content based on the current page
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('blog-post.html')) {
        loadBlogPost();
    } else {
        loadBlogPosts();
    }
}); 