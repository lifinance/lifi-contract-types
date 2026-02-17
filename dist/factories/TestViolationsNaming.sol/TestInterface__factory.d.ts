import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { TestInterface, TestInterfaceInterface } from "../../TestViolationsNaming.sol/TestInterface";
export declare class TestInterface__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "someFunction";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): TestInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestInterface;
}
