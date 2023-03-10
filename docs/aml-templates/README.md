# aml-templates
template repository for azure machine learnings

<p align="center">
  <img src="docs/images/aml.svg" height="80"/>
  <img src="https://i.ya-webdesign.com/images/a-plus-png-2.png" alt="plus" height="40"/>
  <img src="docs/images/actions.png" alt="Azure Machine Learning + Actions" height="80"/>
</p>


this template is written in accordance with specific versions of aml github actions 
confirm to below table to check the supported versions. 

# Getting started

### 1. Prerequisites

The following prerequisites are required to make this repository work:
- Azure subscription
   
   If you don’t have an Azure subscription, create a free account before you begin. Try the [free or paid version of Azure Machine Learning](https://aka.ms/AMLFree) today.

### 2. Create repository

To get started with ML Ops using auzre ml actions, simply create a new repo based off this template, by clicking on the green "Use this template" button:

<p align="center">
  <img src="https://help.github.com/assets/images/help/repository/use-this-template-button.png" alt="GitHub Template repository" width="700"/>
</p>

### 3. Setting up the required secrets

A service principal needs to be generated for authentication and getting access to your Azure subscription. We suggest adding a service principal with contributor rights to a new resource group or to the one where you have deployed your existing Azure Machine Learning workspace. Just go to the Azure Portal to find the details of your resource group or workspace. Then start the Cloud CLI or install the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) on your computer and execute the following command to generate the required credentials:

```sh
# Replace {service-principal-name}, {subscription-id} and {resource-group} with your 
# Azure subscription id and resource group name and any name for your service principle
# if you want to provide a subscription level access to SP then remove the resource group part
az ad sp create-for-rbac --name {service-principal-name} \
                         --role contributor \
                         --scopes /subscriptions/{subscription-id}/resourceGroups/{resource-group} \
                         --sdk-auth
```

This will generate the following JSON output:

```sh
{
  "clientId": "<GUID>",
  "clientSecret": "<GUID>",
  "subscriptionId": "<GUID>",
  "tenantId": "<GUID>",
  (...)
}
```

Add this JSON output as [a secret](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets) with the name `AZURE_CREDENTIALS` in your GitHub repository:

<p align="center">
  <img src="docs/images/secrets.png" alt="GitHub Template repository" width="700"/>
</p>

To do so, click on the Settings tab in your repository, then click on Secrets and finally add the new secret with the name `AZURE_CREDENTIALS` to your repository.

Please follow [this link](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets) for more details. 

### 4. Define your workspace parameters

You have to modify the parameters in the <a href="/.cloud/.azure/workspace.json">`/.cloud/.azure/workspace.json"` file</a> in your repository, so that the GitHub Actions create or connect to the desired Azure Machine Learning workspace. Just click on the link and edit the file.

Please use the same value for the `resource_group` parameter that you have used when generating the azure credentials. If you already have an Azure ML Workspace under that resource group, change the `name` parameter in the JSON file to the name of your workspace, if you want the Action to create a new workspace in that resource group, pick a name for your new workspace, and assign it to the `name` parameter. You can also delete the `name` parameter, if you want the action to use the default value, which is the repository name.

Once you save your changes to the file, the predefined GitHub workflow that trains and deploys a model on Azure Machine Learning gets triggered. Check the actions tab to view if your actions have successfully run.

### 5. Modify the code

Now you can start modifying the code in the <a href="/code">`code` folder</a>, so that your model and not the provided sample model gets trained on Azure. Where required, modify the environment yaml so that the training and deployment environments will have the correct packages installed in the conda environment for your training and deployment.
Upon pushing the changes, actions will kick off your training and deployment run. Check the actions tab to view if your actions have successfully run.

Comment lines 39 to 55 in your <a href="/.github/workflows/train_deploy.yml">`"/.github/workflows/train_deploy.yml"` file</a> if you only want to train the model. Uncomment line 7 to 8, if you only want to kick off the workflow when pushing changes to the `"/code/"` file.

### 6. Viewing your AML resources and runs

The log outputs of your action will provide URLs for you to view the resources that have been created in AML. Alternatively, you can visit the [Machine Learning Studio](https://ml.azure.com/) to view the progress of your runs, etc. For more details, read the documentation below.

# Documentation

## Code structure

| File/folder                   | Description                                |
| ----------------------------- | ------------------------------------------ |
| `.cloud/.azure/workspace.json`                        | file containing the workspace information to use for machine learning. |
| `.cloud/.azure/aml_compute.json`                  | file containing the aml compute information to use for machine learning. |
| `.cloud/.azure/aks_compute.json`         | file containing the aml compute information to use for machine learning. |
| `.cloud/.azure/run.json`         | file containing the training run information to use for machine learning. |
| `.cloud/.azure/registermodel.json`         | file containing the registring information to register a model to azure machine learning. |
| `.cloud/.azure/aci_deploy.json`         | file containing the deployment configuration to deploy a model to ACI on azure machine learning. |
| `.cloud/.azure/aks_deploy.json`         | file containing the deployment configuration to deploy a model to AKS on azure machine learning. |


## Documentation of Azure Machine Learning GitHub Actions

The template uses the open source Azure certified Actions listed below. Click on the links and read the README files for more details.
- [aml-workspace](https://github.com/Azure/aml-workspace) - Connects to or creates a new workspace
- [aml-compute](https://github.com/Azure/aml-compute) - Connects to or creates a new compute target in Azure Machine Learning
- [aml-run](https://github.com/Azure/aml-run) - Submits a ScriptRun, an Estimator or a Pipeline to Azure Machine Learning
- [aml-registermodel](https://github.com/Azure/aml-registermodel) - Registers a model to Azure Machine Learning
- [aml-deploy](https://github.com/Azure/aml-deploy) - Deploys a model and creates an endpoint for the model

## Known issues

### Error: MissingSubscriptionRegistration

Error message: 
```sh
Message: ***'error': ***'code': 'MissingSubscriptionRegistration', 'message': "The subscription is not registered to use namespace 'Microsoft.KeyVault'. See https://aka.ms/rps-not-found for how to register subscriptions.", 'details': [***'code': 'MissingSubscriptionRegistration', 'target': 'Microsoft.KeyVault', 'message': "The subscription is not registered to use namespace 'Microsoft.KeyVault'. See https://aka.ms/rps-not-found for how to register subscriptions
```
Solution:

This error message appears, in case the `Azure/aml-workspace` action tries to create a new Azure Machine Learning workspace in your resource group and you have never deployed a Key Vault in the subscription before. We recommend to create an Azure Machine Learning workspace manually in the Azure Portal. Follow the [steps on this website](https://docs.microsoft.com/en-us/azure/machine-learning/tutorial-1st-experiment-sdk-setup#create-a-workspace) to create a new workspace with the desired name. After ou have successfully completed the steps, you have to make sure, that your Service Principal has access to the resource group and that the details in your <a href="/.cloud/.azure/workspace.json">`/.cloud/.azure/workspace.json"` file</a> are correct and point to the right workspace and resource group.

# What is MLOps?

<p align="center">
  <img src="docs/images/ml-lifecycle.png" alt="Azure Machine Learning Lifecycle" width="700"/>
</p>

MLOps empowers data scientists and machine learning engineers to bring together their knowledge and skills to simplify the process of going from model development to release/deployment. ML Ops enables you to track, version, test, certify and reuse assets in every part of the machine learning lifecycle and provides orchestration services to streamline managing this lifecycle. This allows practitioners to automate the end to end machine Learning lifecycle to frequently update models, test new models, and continuously roll out new ML models alongside your other applications and services.

This repository enables Data Scientists to focus on the training and deployment code of their machine learning project (`code` folder of this repository). Once new code is checked into the `code` folder of the master branch of this repository the GitHub workflow is triggered and open source Azure Machine Learning actions are used to automatically manage the training through to deployment phases.

# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.