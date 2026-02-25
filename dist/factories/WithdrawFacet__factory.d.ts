import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WithdrawFacet, WithdrawFacetInterface } from "../WithdrawFacet";
type WithdrawFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506107ca8061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061004a575f3560e01c80631458d7ad1461004e5780637a2b9e46146100635780638738e44114610076578063d9caed12146100be575b5f5ffd5b61006161005c36600461057f565b6100d1565b005b610061610071366004610672565b610210565b604080518082018252600581527f312e302e31000000000000000000000000000000000000000000000000000000602082015290516100b591906106f4565b60405180910390f35b6100616100cc366004610747565b61025d565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314610117576101176102b3565b5f6017873b1180610154576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff16878760405161017b929190610785565b5f604051808303815f865af19150503d805f81146101b4576040519150601f19603f3d011682016040523d82523d5f602084013e6101b9565b606091505b509092505081156101d4576101cf858585610352565b610206565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314610256576102566102b3565b5050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146102a3576102a36102b3565b6102ae838383610352565b505050565b5f80357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff90911615151461034f576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b5f73ffffffffffffffffffffffffffffffffffffffff8316156103755782610377565b335b90506103848482846103dd565b6040805173ffffffffffffffffffffffffffffffffffffffff8381168252602082018590528616917f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099910160405180910390a250505050565b73ffffffffffffffffffffffffffffffffffffffff8316610402576102ae828261040d565b6102ae83838361047e565b73ffffffffffffffffffffffffffffffffffffffff821661045a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047a73ffffffffffffffffffffffffffffffffffffffff8316826104ec565b5050565b73ffffffffffffffffffffffffffffffffffffffff82166104cb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ae73ffffffffffffffffffffffffffffffffffffffff84168383610505565b5f385f3884865af161047a5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610545576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461034f575f5ffd5b803561057a8161054e565b919050565b5f5f5f5f5f5f60a08789031215610594575f5ffd5b863561059f8161054e565b9550602087013567ffffffffffffffff8111156105ba575f5ffd5b8701601f810189136105ca575f5ffd5b803567ffffffffffffffff8111156105e0575f5ffd5b8960208284010111156105f1575f5ffd5b602091909101955093506106076040880161056f565b92506106156060880161056f565b95989497509295919493608090920135925050565b5f5f83601f84011261063a575f5ffd5b50813567ffffffffffffffff811115610651575f5ffd5b6020830191508360208260051b850101111561066b575f5ffd5b9250929050565b5f5f5f5f5f60608688031215610686575f5ffd5b853567ffffffffffffffff81111561069c575f5ffd5b6106a88882890161062a565b90965094505060208601356106bc8161054e565b9250604086013567ffffffffffffffff8111156106d7575f5ffd5b6106e38882890161062a565b969995985093965092949392505050565b602081525f82518060208401528060208501604085015e5f6040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011684010191505092915050565b5f5f5f60608486031215610759575f5ffd5b83356107648161054e565b925060208401356107748161054e565b929592945050506040919091013590565b818382375f910190815291905056fea264697066735822122025529e3d4271182e2ac97cbe16de10563b55dec8b59e58578fed5c7db849991e64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "batchWithdraw";
        readonly inputs: readonly [{
            readonly name: "_assetAddresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
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
        readonly name: "getWithdrawFacetVersion";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
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
        readonly name: "BatchWithdrawCompleted";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "address[]";
            readonly indexed: true;
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "totalAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
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
