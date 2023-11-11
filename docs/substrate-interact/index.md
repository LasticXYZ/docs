# Interacting with the Coretime Chain

This guide provides detailed instructions on how to interact with the Coretime chain using the `./substrate_interact` interface.

## Getting Started

Follow these steps to set up your environment and start interacting with the Coretime chain.

### Step 1: Clone the LasticUI Repository

Begin by cloning the LasticUI repository to your local machine. Open your terminal and execute the following command:

```sh
git clone git@github.com:LasticXYZ/LasticUI.git
```
This command clones the LasticUI repository into a directory named LasticUI on your local machine.

### Step 2: Ensure Prerequisites
Before proceeding, make sure you have a local Substrate node running. The Substrate node is required for the Coretime chain interaction.

To start a local Substrate node, use the start.sh script by running:

```sh
./start.sh
```
This script initializes and runs the local Substrate node, setting up the necessary blockchain environment.

### Step 3: Set Up and Run the Frontend
With the Substrate node running, the next step is to set up and run the frontend interface.

Install Dependencies

Navigate to the frontend directory and install the required dependencies:

```sh
pnpm i
```
This command installs all the necessary dependencies defined in the package.json file.

## Start the Frontend Server

After the dependencies are installed, start the frontend server:

```sh
pnpm run dev
```
This command launches the frontend server, allowing you to interact with the Coretime chain through a web interface.

## Accessing the Frontend
Once the server is up and running, you can access the frontend interface at the following URL:

**[http://localhost:8000/substrate-front-end-template]()**

This link opens the Coretime chain's frontend interface, where you can interact with the blockchain features and functionalities.