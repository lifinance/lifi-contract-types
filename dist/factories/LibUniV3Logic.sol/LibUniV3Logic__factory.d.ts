import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { LibUniV3Logic, LibUniV3LogicInterface } from "../../LibUniV3Logic.sol/LibUniV3Logic";
type LibUniV3LogicConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibUniV3Logic__factory extends ContractFactory {
    constructor(...args: LibUniV3LogicConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LibUniV3Logic>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LibUniV3Logic;
    connect(signer: Signer): LibUniV3Logic__factory;
    static readonly bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea264697066735822122023dbde06e70971f143d6088a581b12d1d2f7cc3e2c2100e10891c9b7ecf7e84c64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "UniV3SwapUnexpected";
        readonly inputs: readonly [];
    }];
    static createInterface(): LibUniV3LogicInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibUniV3Logic;
}
export {};
