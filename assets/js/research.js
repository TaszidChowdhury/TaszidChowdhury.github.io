/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Knowledge-based Cyber Physical Security at SmartHome: A Review",
    authors:
      "Azhar Alsufyani, Omer Rana, Charith Perera",
    conferences:
      "School of ComputerScience & Informatics, Cardiff University,Cardiff, UnitedKingdom",
    researchYr: 2024,
    citebox: "popup1",
    image: "assets/images/research-page/PhysicalSecuritySmartHome.jpeg",
    pdfLink: "assets/docs/PhysicalSecuritySmartHome.pdf",
    citation: {
      vancouver:
        "Azhar Alsufyani, Omer Rana, and Charith Perera. 2024. Knowledge-based Cyber Physical Security at Smart Home: A Review. ACM Comput. Surv. 57, 3, Article 53 (November 2024), 36 pages. https://doi.org/10.1145/3698768",
    },
    abstract:
      "Smart homes, as a key component of cyber-physical systems (CPSs), integrate interconnected devices and applications to improve residents' quality of life. However, their increasing complexity and reliance on Internet of Things (IoT) technologies expose them to a broad range of cyber and physical security threats. While many existing security solutions adopt data-driven techniques such as machine learning, this review focuses on knowledge-based approaches that incorporate reasoning and context-awareness for improved decision-making and security. The paper proposes a taxonomy for decision-making processes, analyzes various threat models, and explores the role of knowledge in detecting, preventing, and mitigating attacks. Through a comprehensive survey of recent literature, it evaluates smart-home security architectures, discusses testbeds and evaluation metrics, and identifies key challenges and open research areas. The study ultimately highlights the potential of knowledge-driven security frameworks to enhance the resilience and autonomy of smart-home environments.",
    absbox: "absPopup1",
  },

  {
    title: "Securing Smart Home IoT Systems with Attribute-Based Access Control",
    authors:
      "Gaurav Goyal, Peng Liu, Shamik Sural",
    conferences:
      "SaT-CPS '22, April 27, 2022, Baltimore, MD, USA",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/IOTCloud.jpg",
    pdfLink: "assets/docs/IOTCloud.pdf",
    citation: {
      vancouver:
        "Gaurav Goyal, Peng Liu, and Shamik Sural. 2022. Securing Smart Home IoTSystems with Attribute-Based Access Control. In Proceedings of the 2022ACM Workshop on Secure and Trustworthy Cyber-Physical Systems (SaT-CPS'22), April 27, 2022, Baltimore, MD, USA. ACM, New York, NY, USA, 10 pages. https://doi.org/10.1145/3510547.3517920",
    },
    abstract:
      "With the rapid adoption of IoT technologies in smart homes, concerns over secure and fine-grained access control have become increasingly critical. While many existing systems offer basic device-level permissions, they often lack the flexibility and contextual awareness required for dynamic and secure access management. This paper introduces a novel framework that leverages Attribute-Based Access Control (ABAC) to enhance the security of smart home IoT environments. ABAC offers context-aware policy enforcement using user, device, and environmental attributes, enabling both coarse and fine-grained access decisions. The proposed framework integrates a policy store, enhanced IoT apps, and a centralized policy enforcer to implement rule-based decision-making without requiring deep modification to existing IoT infrastructures. A prototype was implemented on the SmartThings platform using AWS-hosted services, demonstrating effective policy enforcement with minimal performance overhead. Experimental results confirm the scalability and efficiency of the approach, offering a practical and privacy-preserving solution for real-world smart home deployments.e considered as a dummy data 2",
    absbox: "absPopup2",
  },

  {
    title:
      "ISF: Security Analysis and Assessment of Smart Home IoT-based Firmware",
    authors: "Akashdeep Bhardwaj, Keshav Kaushik, Dr. Mohammed Alshehri, Dr. Ahmed Abo-Bakr Mohamed, Dr. Ismail Keshta ",
    conferences:
      "2023 Association for Computing Machinery",
    researchYr: 2023,
    citebox: "popup3",
    image: "assets/images/research-page/ISF.jpeg",
    pdfLink: "assets/docs/ISF.pdf",
    citation: {
      vancouver:
        "Akashdeep Bhardwaj, Keshav Kaushik, Mohammed Alshehri, Ahmed Abo-Bakr Mohamed, and Ismail Keshta. 2023. ISF: Security Analysis and Assessment of Smart Home IoT-based Firmware. ACM Trans. Sen. Netw. Just Accepted (January 2023). https://doi.org/10.1145/3578363",
    },
    abstract:
      "As smart home environments increasingly rely on IoT devices for connectivity and automation, securing the firmware that powers these devices becomes a critical cybersecurity challenge. This study presents ISF, a comprehensive framework for analyzing and assessing the security posture of IoT-based firmware in smart home ecosystems. The research investigates vulnerabilities such as hardcoded credentials, unencrypted data, and sensitive configuration files using open-source tools like Binwalk and Firmwalker. A structured methodology is proposed to extract, scan, and evaluate firmware components from commonly used devices, including routers and IP cameras. By analyzing real-time datasets sourced from Shodan and Censys, the study identifies widespread firmware update delays—often exceeding 11 months—and demonstrates that most vendors fail to enforce timely security patches. Through entropy analysis and reverse engineering, the study exposes the risks posed by outdated or poorly secured firmware, emphasizing the need for industry-wide reform. The findings support four core hypotheses related to vendor inconsistency, user negligence, and systemic update lags, ultimately advocating for proactive firmware security assessments as a foundational layer of smart home defense.",
    absbox: "absPopup3",
  },

  {
    title:
      "Unveiling User Security and Privacy Concerns Regarding Smart Home IoT Products from Online Reviews",
    authors:
      "Taufiq Islam Protick, Aafaq Sabir, SB Abhinaya, Aiden Bartlett, Anupam Das ",
    conferences:
      "ACM J.Comput.Sustain. Soc., Vol. 2,No. 4,Article 44.Publicationdate:November2024.",
    researchYr: 2024,
    citebox: "popup4",
    image: "assets/images/research-page/ReviewsSecurity.jpeg",
    pdfLink: "assets/docs/ReviewsSecurity.pdf",
    citation: {
      vancouver:
        "Taufiq Islam Protick, Aafaq Sabir, SB Abhinaya, Aiden Bartlett, and Anupam Das. 2024. Unveiling Users Security and Privacy Concerns Regarding Smart Home IoT Products from Online Reviews. ACM J. Comput. Sustain. Soc.2, 4,Article 44(November 2024), 41pages. https://doi.org/10.1145/3685929",
    },
    abstract:
      "As the adoption of smart home IoT products grows, so too do concerns surrounding their security and privacy. This paper presents a mixed-method analysis that leverages online consumer reviews from Amazon across the US, UK, and India to investigate how users express security and privacy (S&P) concerns regarding three popular categories of IoT devices: fitness trackers (FT), smart home speakers (SHS), and surveillance and security camera systems (SSCS). The authors develop an enhanced keyword set through inductive coding to extract and classify relevant reviews with high precision. A thematic analysis of over 2,800 reviews reveals 14 distinct S&P concern themes, ranging from data security and unauthorized data collection to government surveillance and skepticism about company affiliations. Notably, concerns are expressed differently across geographic regions, with US consumers consistently exhibiting higher concern ratios. The study underscores how product reviews serve as a rich, underutilized resource for identifying end-user apprehensions, ultimately offering manufacturers a feedback loop for improving transparency, trust, and security practices in IoT ecosystems. This is currently left empty and this can be considered as a dummy data 4",
    absbox: "absPopup4",
  },

  {
    title: "Location, Location, Security? Exploring Location-Based Smart Device Security Concerns and Mitigations within Low-Rent",
    authors: "Laura Benton, Asimina Vasalou, Sarah Turner",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    citebox: "popup5",
    image: "assets/images/research-page/LocationLocation.jpeg",
    pdfLink: "assets/docs/Location, Location, Security? Exploring Location-Based Smart Device Security Concerns and Mitigations within Low-Rent Homes.pdf",
    citation: {
      vancouver:
        "Laura Benton, Asimina Vasalou, and Sarah Turner. 2023. Location, Location, Security? Exploring Location-Based Smart Device Security Concerns and Mitigations within Low-Rent Homes. In Designing Interactive Systems Conference (DIS '23), July 10–14, 2023, Pittsburgh, PA, USA. ACM, New York, NY, USA, 18 pages. https://doi.org/10.1145/3563657.3596077",
    },
    abstract:
      "The increasing adoption of smart devices in the home introducenew security implications for tenants, with previous research showing the signifcance of where the devices are placed. This paper examines the relationship between device location and security: we ask how users' security concerns shape where they place their smart devices and how they attempt to mitigate their concerns. The research focuses on an underrepresented group, those people living in social (low-rent) housing, motivated by the growing interest of housing providers to install smart devices within tenants' homes. Using speculative design as a probe followed by interviews with eleven tenants, we fnd that security concerns are centred around 'intimate places', 'social responsibility' and 'surveillance' with users combining social practices and technical security features to miti-gate these. Our research contributes new ethical implications for deploying and designing smart home devices addressed to social housing providers and smart device designers.",
    absbox: "absPopup5",
  },

  //{
    //title: "Deep Unfolding Network for Image Super-Resolution",
    //authors: "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
    //conferences:
      //"IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    //researchYr: 2020,
    //citebox: "popup6",
    //image: "assets/images/research-page/deepNetwork.png",
    //citation: {
      //vancouver:
        //"Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    //},
    //abstract:
      //"This is currently left empty and this can be considered as a dummy data 6",
    //absbox: "absPopup6",
  //},

  //{
    //title:
      //"Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
    //authors: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
    //conferences:
      //"IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    //researchYr: 2020,
    //citebox: "popup7",
    //image: "assets/images/research-page/imageDecomposition.png",
    //citation: {
      //vancouver:
        //"Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    //},
    //abstract:
      //"This is currently left empty and this can be considered as a dummy data 7",
    //absbox: "absPopup7",
  //},
  //{
    //title:
      //"Forward and Backward Information Retention for Accurate Binary Neural Networks",
    //authors:
      //"Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
    //conferences:
      //"IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    //researchYr: 2020,
    //citebox: "popup8",
    //image: "assets/images/research-page/neuralNetworks.jpg",
    //citation: {
      //vancouver:
        //"Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    //},
    //abstract:
      //"This is currently left empty and this can be considered as a dummy data 8",
    //absbox: "absPopup8",
  //},
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
      pdfLink,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>

                        <a href="${pdfLink}" class="button button-accent button-small text-right button-abstract" download>
                            <i class="fas fa-file-pdf"></i> PDF
                        </a>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
