task("read-number", "reads the contract's number")
    .addParam("contract", "The Contract")
    .setAction(async (taskArgs) => {
        const contractAddress = taskArgs.contract

        const MyFirstContract = await ethers.getContractFactory("MyFirstContract")

        const accounts = await ethers.getSigners()
        const signer = accounts[0]
        const myFirstContract = await new ethers.Contract(contractAddress, MyFirstContract.interface, signer)

        let result = BigInt(await myFirstContract.getNumber()).toString()

        console.log("stored value: " + result);
    });

task("write-number", "writes the contract's number")
    .addParam("contract", "The Contract")
    .addParam("value", "The Value")
    .setAction(async (taskArgs) => {
        const contractAddress = taskArgs.contract
        const value = taskArgs.value

        const MyFirstContract = await ethers.getContractFactory("MyFirstContract")

        const accounts = await ethers.getSigners()
        const signer = accounts[0]
        const myFirstContract = await new ethers.Contract(contractAddress, MyFirstContract.interface, signer)

        await myFirstContract.setNumber(value)

        console.log("value set: " + value);
    });
module.exports = {};