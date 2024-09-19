async function main() {
    // ดึงข้อมูลบัญชีของผู้ปรับใช้
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // รับโรงงานสัญญาสำหรับ RegisterDisaster
    const RegisterDisaster = await ethers.getContractFactory("RegisterDisaster");

    console.log("Deploying RegisterDisaster contract...");

    try {
        //ปรับใช้สัญญา
        const registerDisaster = await RegisterDisaster.deploy();

        // บันทึกที่อยู่สัญญาที่ถูกต้อง (โดยใช้ `เป้าหมาย`)
        console.log("RegisterDisaster contract deployed to:", registerDisaster.target);

        // บันทึกรายละเอียดสัญญาที่ปรับใช้สำหรับการดีบัก
        console.log("Deployed contract details:", registerDisaster);

    } catch (error) {
        console.error("Error during deployment:", error);
    }
}

main().catch((error) => {
    console.error("Error deploying contract:", error);
    process.exitCode = 1;
});
