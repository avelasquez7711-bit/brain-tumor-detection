# Brain Tumor MRI Detection

This project focuses on automatically identifying and classifying brain tumors from magnetic resonance imaging (MRI) scans.

🌐 **Live Application:** [brain-mri-tumor-classifier-ai4all.streamlit.app](https://brain-mri-tumor-classifier-ai4all.streamlit.app/)

📄 **Project Site:** [sahilmulki.github.io/brain-tumor-detection](https://sahilmulki.github.io/brain-tumor-detection/) — overview, evaluation, and bias analysis

## Collaborators
* [Angel Velasquez](https://github.com/avelasquez7711-bit)
* [Sahil Mulki](https://github.com/SahilMulki)
* [Yi Zou](https://github.com/yizou275)
* [Hamet Coulibaly](https://github.com/hamet-c)
* [Michael Abraham](https://github.com/mikeiioo)
* [Izzie Lee](https://github.com/jiwonizzielee)
* [Ying Lin Zhao](https://github.com/Yzhao2433)

## Project Overview
### Topic of Interest
Brain tumors are critical, life-threatening conditions. Early and accurate detection is vital for improving patient survival rates and treatment outcomes. This project aims to train and evaluate a Convolutional Neural Network (CNN) to detect visual indications of tumors from brain MRI scans, streamline the diagnostic workflow, and provide a reliable second opinion for medical professionals.

### Potential Impact
* **Early Intervention:** Assisting radiologists in catching micro-abnormalities early.
* **Model Transparency:** Documenting potential sources of data bias and evaluating model confidence to improve trust in AI-assisted medicine.
* **Clinical Support:** Reducing diagnostic workflows by prioritizing high-risk scans for immediate human review.

## Research Question
We are exploring the following key technical questions:
1.  *Can machine learning models accurately detect brain tumors from MRI images and classify them into the correct categories (Glioma, Meningioma, Pituitary, or No Tumor)?*

## Dataset & Pipeline

### Dataset Information
* **Name:** Brain Tumor MRI Dataset
* **Source:** [Kaggle](https://www.kaggle.com/datasets/masoudnickparvar/brain-tumor-mri-dataset/data)
* **Size:** 7,200 human brain MRI images.
* **Distribution:** Balanced sample size across 4 distinct classes (1400 training + 400 testing per class):
    * Glioma
    * Meningioma
    * Pituitary Tumor
    * No Tumor

### Data Preprocessing Workflow
Before feeding the data into our network, the workflow includes:
* **Image Augmentation:** Slight Rotations and Contrast Jittering
* **Normalization:** Resizing all images to a uniform resolution.
* **Data Split:** Splitting the dataset structure into clean Training and Testing subsets.

## Machine Learning
* **Convolutional Neural Networks (CNNs)**

## Sources of Bias & Mitigation Strategies
### Identified Sources of Bias
* **Demographic & Equipment Bias:** The dataset may lack diversity regarding the MRI machine models used and patient demographics (age, biological sex, ethnicity).

### Mitigation Strategies
* **Data Augmentation:** Applying random rotations and brightness adjustments during training to force the model to learn structural anomalies rather than image-specific artifacts or scan angles.

## Citations
Author and DOI details below were verified against Crossref metadata.

* Disci, R., Gurcan, F., & Soylu, A. (2025). Advanced brain tumor classification in MR images using transfer learning and pre-trained deep CNN models. Cancers, 17(1), 121. https://doi.org/10.3390/cancers17010121
* Abbad Andaloussi, M., Maser, R., Hertel, F., Lamoline, F., & Husch, A. D. (2025). Exploring adult glioma through MRI: A review of publicly available datasets to guide efficient image analysis. Neuro-Oncology Advances, 7(1), vdae197. https://doi.org/10.1093/noajnl/vdae197
* Abdusalomov, A. B., Mukhiddinov, M., & Whangbo, T. K. (2023). Brain tumor detection based on deep learning approaches and magnetic resonance imaging. Cancers, 15(16), 4172. https://doi.org/10.3390/cancers15164172

## Project Site
The static site in [`docs/`](docs/) is published with GitHub Pages (Settings → Pages → source `main` / `/docs`).
To preview it locally:

```bash
python3 -m http.server 8000 --directory docs
```
