// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Planning
// Design
// Maintain
// Analysis of Requirements
// Testing & Integration
// Planning
console.log("Planning");
console.log("Analysis of Requirements");
console.log("Design"); 
console.log("Implementation");
console.log("Testing & Integration"+"\n");


//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "Planning - This is the first step, in which the end goal of the software is determined and defined. \nDevelopers typically will see what systems are already in place, and determine what features will need to be added.\n" 
console.log(planning+"\n");

const analysisofrequirements = "Analysis of Requirements - This is the second step. \nOnce the requirement analysis is done the next step is to clearly define and document the product requirements and get them approved from the customer or the market analysts. \nThis is done through an SRS (Software Requirement Specification) document which consists of all the product requirements to be designed and developed during the project life cycle."
console.log(analysisofrequirements+"\n");

const design = "Design - This is the third step. \nSRS is the reference for product architects to come out with the best architecture for the product to be developed. \nBased on the requirements specified in SRS, usually more than one design approach for the product architecture is proposed and documented in a DDS – Design Document Specification.  \nThis DDS is reviewed by all the important stakeholders and based on various parameters as risk assessment, product robustness, design modularity, budget and time constraints, the best design approach is selected for the product. \nA design approach clearly defines all the architectural modules of the product along with its communication and data flow representation with the external and third party modules (if any). \nThe internal design of all the modules of the proposed architecture should be clearly defined with the minutest of the details in DDS."
console.log(design+"\n");

const implementation = "Implementation - This is the fourth step. \nIn this stage of SDLC the actual development starts and the product is built. \nThe programming code is generated as per DDS during this stage. \nIf the design is performed in a detailed and organized manner, code generation can be accomplished without much hassle.  \nDevelopers must follow the coding guidelines defined by their organization and programming tools like compilers, interpreters, debuggers, etc. are used to generate the code. Different high level programming languages such as C, C++, Pascal, Java and PHP are used for coding. \nThe programming language is chosen with respect to the type of software being developed."
console.log(implementation+"\n");

const testingintegration = "Testing & Integration - This is the fifth step. \nThis stage is usually a subset of all the stages as in the modern SDLC models, the testing activities are mostly involved in all the stages of SDLC. \nHowever, this stage refers to the testing only stage of the product where product defects are reported, tracked, fixed and retested, until the product reaches the quality standards defined in the SRS."
console.log(testingintegration+"\n");

