import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WithdrawFacet, WithdrawFacetInterface } from "../WithdrawFacet";
declare type WithdrawFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WithdrawFacet__factory extends ContractFactory {
    constructor(...args: WithdrawFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<WithdrawFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): WithdrawFacet;
    connect(signer: Signer): WithdrawFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506107048061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610034575f3560e01c80631458d7ad14610038578063d9caed121461004d575b5f5ffd5b61004b61004636600461056a565b610060565b005b61004b61005b366004610615565b6101a6565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100a6576100a66101fc565b5f5f6100b18861029b565b9050806100ea576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff168787604051610111929190610653565b5f604051808303815f865af19150503d805f811461014a576040519150601f19603f3d011682016040523d82523d5f602084013e61014f565b606091505b5090925050811561016a5761016585858561033d565b61019c565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146101ec576101ec6101fc565b6101f783838361033d565b505050565b5f80357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff909116151514610298576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b6040805160178082528183019092525f9182918291602082018180368337019050509050833b915060175f60208301863c5f6102d682610662565b90507fffffff000000000000000000000000000000000000000000000000000000000081167fef010000000000000000000000000000000000000000000000000000000000000361033357506023015160601c3b15159392505050565b5050151592915050565b5f73ffffffffffffffffffffffffffffffffffffffff8316156103605782610362565b335b905061036f8482846103c8565b6040805173ffffffffffffffffffffffffffffffffffffffff8381168252602082018590528616917f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099910160405180910390a250505050565b73ffffffffffffffffffffffffffffffffffffffff83166103ed576101f782826103f8565b6101f7838383610469565b73ffffffffffffffffffffffffffffffffffffffff8216610445576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61046573ffffffffffffffffffffffffffffffffffffffff8316826104d7565b5050565b73ffffffffffffffffffffffffffffffffffffffff82166104b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101f773ffffffffffffffffffffffffffffffffffffffff841683836104f0565b5f385f3884865af16104655763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610530576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610298575f5ffd5b803561056581610539565b919050565b5f5f5f5f5f5f60a0878903121561057f575f5ffd5b863561058a81610539565b9550602087013567ffffffffffffffff8111156105a5575f5ffd5b8701601f810189136105b5575f5ffd5b803567ffffffffffffffff8111156105cb575f5ffd5b8960208284010111156105dc575f5ffd5b602091909101955093506105f26040880161055a565b92506106006060880161055a565b95989497509295919493608090920135925050565b5f5f5f60608486031215610627575f5ffd5b833561063281610539565b9250602084013561064281610539565b929592945050506040919091013590565b818382375f9101908152919050565b805160208201517fffffff00000000000000000000000000000000000000000000000000000000008116919060038210156106c7577fffffff0000000000000000000000000000000000000000000000000000000000808360030360031b1b82161692505b505091905056fea26469706673582212204f434bc7ecaa308b14d0eb7560b10d6c7c93cfa2b728cd9e3e061529137eee5f64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "executeCallAndWithdraw";
        readonly inputs: readonly [{
            readonly name: "_callTo";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "LogWithdraw";
        readonly inputs: readonly [{
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotAContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "WithdrawFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): WithdrawFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): WithdrawFacet;
}
export {};
