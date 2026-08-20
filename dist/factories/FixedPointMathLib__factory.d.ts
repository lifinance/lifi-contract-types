import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { FixedPointMathLib, FixedPointMathLibInterface } from "../FixedPointMathLib";
type FixedPointMathLibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FixedPointMathLib__factory extends ContractFactory {
    constructor(...args: FixedPointMathLibConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<FixedPointMathLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): FixedPointMathLib;
    connect(signer: Signer): FixedPointMathLib__factory;
    static readonly bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea2646970667358221220c51dd5372f51a21cf094bcc0066461553f1671838c7881367bcdf83c93060d4464736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "DivFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DivWadFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ExpOverflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FactorialOverflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FullMulDivFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "LnWadUndefined";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "MantissaOverflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "MulDivFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "MulWadFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OutOfDomain";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "RPowOverflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SDivWadFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SMulWadFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): FixedPointMathLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FixedPointMathLib;
}
export {};
