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
    static readonly bytecode = "0x608060405234801561001057600080fd5b506105a0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063612ad9cb1461003b578063a4c3366e146100d7575b600080fd5b6100c36100493660046104eb565b7fffffffff000000000000000000000000000000000000000000000000000000009190911660009081527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020908152604080832073ffffffffffffffffffffffffffffffffffffffff9094168352929052205460ff1690565b604051901515815260200160405180910390f35b6100ea6100e536600461051e565b6100ec565b005b3073ffffffffffffffffffffffffffffffffffffffff83160361013b576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61014361023b565b806101575761015283836102b0565b610161565b6101618383610377565b80156101d1576040517fffffffff0000000000000000000000000000000000000000000000000000000084169073ffffffffffffffffffffffffffffffffffffffff8416907fd97cb52d6a919c35d1a9848f69806a32611c1381fa1078e5ea866186ee4c46c790600090a3505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000084169073ffffffffffffffffffffffffffffffffffffffff8416907f2fb75e73eca07a04ac148df401d1f013ddb4c8177a453af29c97c88037bac84890600090a3505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146102ae576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b7fffffffff00000000000000000000000000000000000000000000000000000000821660008181527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842073ffffffffffffffffffffffffffffffffffffffff8716808652925280842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555191939290917f4e2965fe48abf86ff779f17f9368d20e8eb4eebd1473e650a0aae103adc4b68b9190a3505050565b3073ffffffffffffffffffffffffffffffffffffffff8216036103c6576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60007fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e7fffffffff00000000000000000000000000000000000000000000000000000000841660008181526020838152604080832073ffffffffffffffffffffffffffffffffffffffff8816808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555193945091927fcdd2f8ab598ea828ea63b4a6cfc86ccf7d40784556f0783753603ba712c83b009190a3505050565b80357fffffffff00000000000000000000000000000000000000000000000000000000811681146104c257600080fd5b919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146104c257600080fd5b600080604083850312156104fe57600080fd5b61050783610492565b9150610515602084016104c7565b90509250929050565b60008060006060848603121561053357600080fd5b61053c84610492565b925061054a602085016104c7565b91506040840135801515811461055f57600080fd5b80915050925092509256fea2646970667358221220f672900b30498812bfc6988ea894f2afc30ca0ccdc703c10253ce0c5bc84da4b64736f6c63430008110033";
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
