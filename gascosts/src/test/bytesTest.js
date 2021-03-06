/**
 * Check memory usage / gas costs are as expected for bytes type byte arrays of various lengths.
 *
 * The Truffle output was:
 Contract: Bytes: Gas Usage with Bytes type
 Gas Used: 27624                 21000 base transaction code + ?
 Gas Used: 27624
 Gas Used: 27624
 ✓ setBytes: 0 (108ms)
 Gas Used: 42755                 21000 base transaction code + 20000 sstore when word blank.
 Gas Used: 32812                 21000 base transaction code + 2 * 5000 sstore for update (maybe).
                                 Maybe one for the length and one for the values?
                                 The storage (one store or two, should match what is done for first pass.
  Gas Used: 32812
 ✓ setBytes: 1 (108ms)
 Gas Used: 44675
 Gas Used: 34732
 Gas Used: 34732
 ✓ setBytes: 30 (138ms)
 Gas Used: 44739
 Gas Used: 34796
 Gas Used: 34796
 ✓ setBytes: 31 (114ms)
 Gas Used: 64970                 21000 base transaction code + 2 * 20000 sstore when word blank.
 Gas Used: 34970
 Gas Used: 34970
 ✓ setBytes: 32 (102ms)
 Gas Used: 85174                 21000 base transaction code + 3 * 20000 sstore when word blank.
 Gas Used: 40174
 Gas Used: 40174
 ✓ setBytes: 33 (111ms)
 Gas Used: 87222
 Gas Used: 42222
 Gas Used: 42222
 ✓ setBytes: 64 (102ms)
 Gas Used: 107426                21000 base transaction code + 4 * 20000 sstore when word blank.
 Gas Used: 47426
 Gas Used: 47426
 ✓ setBytes: 65 (145ms)
 Gas Used: 42755               Demonstrating saving new values uses the same gas.
 Gas Used: 32812
 Gas Used: 32812
 Gas Used: 32812
 ✓ setBytes: 1,2,3,4 (127ms)

 *
 */
const Bytes = artifacts.require("./Bytes.sol");


contract('Bytes: Gas Usage with Bytes type', function(accounts) {
    //                           1 2 3 4 5 6 7 8 9 10                  20                  30                  40                  50                  60
    const noBytes          = "";
    const oneByte          = "0x01";
    const thirtyBytes      = "0x01020304050606708090A0B0C0D0E0F101112131415161718191A1B1C1D1E";
    const thirtyOneBytes   = "0x01020304050606708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F";
    const thirtyTwoBytes   = "0x01020304050606708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F20";
    const thirtyThreeBytes = "0x01020304050606708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F2021";
    const sixtyFourBytes   = "0x01020304050606708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F202122232425262728292A2B2C2D2E2F303132333435363738393A3B3C3D3E3F40";
    const sixtyFiveBytes   = "0x01020304050606708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F202122232425262728292A2B2C2D2E2F303132333435363738393A3B3C3D3E3F4041";

    const b1          = "0x01";
    const b2          = "0x02";
    const b3          = "0x03";
    const b4          = "0x04";



    it("setBytes: 0", async function() {
        let bytes = await Bytes.new();
        let transactionResult = await bytes.setBytes(noBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(noBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(noBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
    });
    it("setBytes: 1", async function() {
        let bytes = await Bytes.new();
        let transactionResult = await bytes.setBytes(oneByte);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(oneByte);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(oneByte);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
    });
    it("setBytes: 30", async function() {
        let bytes = await Bytes.new();
        let transactionResult = await bytes.setBytes(thirtyBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(thirtyBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(thirtyBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
    });
    it("setBytes: 31", async function() {
        let bytes = await Bytes.new();
        let transactionResult = await bytes.setBytes(thirtyOneBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(thirtyOneBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(thirtyOneBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
    });
    it("setBytes: 32", async function() {
        let bytes = await Bytes.new();
        let transactionResult = await bytes.setBytes(thirtyTwoBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(thirtyTwoBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(thirtyTwoBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
    });
    it("setBytes: 33", async function() {
        let bytes = await Bytes.new();
        let transactionResult = await bytes.setBytes(thirtyThreeBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(thirtyThreeBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(thirtyThreeBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
    });
    it("setBytes: 64", async function() {
        let bytes = await Bytes.new();
        let transactionResult = await bytes.setBytes(sixtyFourBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(sixtyFourBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(sixtyFourBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
    });
    it("setBytes: 65", async function() {
        let bytes = await Bytes.new();
        let transactionResult = await bytes.setBytes(sixtyFiveBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(sixtyFiveBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(sixtyFiveBytes);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
    });

    it("setBytes: 1,2,3,4", async function() {
        let bytes = await Bytes.new();
        let transactionResult = await bytes.setBytes(b1);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(b2);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(b3);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
        transactionResult = await bytes.setBytes(b4);
        console.log("Gas Used: " + transactionResult.receipt.gasUsed);
    });

});
