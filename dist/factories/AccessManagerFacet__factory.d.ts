import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AccessManagerFacet, AccessManagerFacetInterface } from "../AccessManagerFacet";
type AccessManagerFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AccessManagerFacet__factory extends ContractFactory {
    constructor(...args: AccessManagerFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AccessManagerFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AccessManagerFacet;
    connect(signer: Signer): AccessManagerFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5061058f8061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610034575f3560e01c8063612ad9cb14610038578063a4c3366e146100d3575b5f5ffd5b6100bf6100463660046104e0565b7fffffffff00000000000000000000000000000000000000000000000000000000919091165f9081527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020908152604080832073ffffffffffffffffffffffffffffffffffffffff9094168352929052205460ff1690565b604051901515815260200160405180910390f35b6100e66100e1366004610511565b6100e8565b005b3073ffffffffffffffffffffffffffffffffffffffff831603610137576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61013f610235565b806101535761014e83836102aa565b61015d565b61015d8383610370565b80156101cc576040517fffffffff0000000000000000000000000000000000000000000000000000000084169073ffffffffffffffffffffffffffffffffffffffff8416907fd97cb52d6a919c35d1a9848f69806a32611c1381fa1078e5ea866186ee4c46c7905f90a3505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000084169073ffffffffffffffffffffffffffffffffffffffff8416907f2fb75e73eca07a04ac148df401d1f013ddb4c8177a453af29c97c88037bac848905f90a3505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146102a8576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b7fffffffff0000000000000000000000000000000000000000000000000000000082165f8181527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842073ffffffffffffffffffffffffffffffffffffffff8716808652925280842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555191939290917f4e2965fe48abf86ff779f17f9368d20e8eb4eebd1473e650a0aae103adc4b68b9190a3505050565b3073ffffffffffffffffffffffffffffffffffffffff8216036103bf576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f7fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e7fffffffff0000000000000000000000000000000000000000000000000000000084165f8181526020838152604080832073ffffffffffffffffffffffffffffffffffffffff8816808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555193945091927fcdd2f8ab598ea828ea63b4a6cfc86ccf7d40784556f0783753603ba712c83b009190a3505050565b80357fffffffff00000000000000000000000000000000000000000000000000000000811681146104b8575f5ffd5b919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146104b8575f5ffd5b5f5f604083850312156104f1575f5ffd5b6104fa83610489565b9150610508602084016104bd565b90509250929050565b5f5f5f60608486031215610523575f5ffd5b61052c84610489565b925061053a602085016104bd565b91506040840135801515811461054e575f5ffd5b80915050925092509256fea264697066735822122045507ce5f2ce3000f2a4fdfc033e2d44287411c8592d9bd1cbfba106304becfb64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "addressCanExecuteMethod";
        readonly inputs: readonly [{
            readonly name: "_selector";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }, {
            readonly name: "_executor";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setCanExecute";
        readonly inputs: readonly [{
            readonly name: "_selector";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }, {
            readonly name: "_executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_canExecute";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "AccessGranted";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "method";
            readonly type: "bytes4";
            readonly indexed: true;
            readonly internalType: "bytes4";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "AccessRevoked";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "method";
            readonly type: "bytes4";
            readonly indexed: true;
            readonly internalType: "bytes4";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ExecutionAllowed";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "method";
            readonly type: "bytes4";
            readonly indexed: true;
            readonly internalType: "bytes4";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ExecutionDenied";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "method";
            readonly type: "bytes4";
            readonly indexed: true;
            readonly internalType: "bytes4";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotAuthoriseSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }];
    static createInterface(): AccessManagerFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AccessManagerFacet;
}
export {};
