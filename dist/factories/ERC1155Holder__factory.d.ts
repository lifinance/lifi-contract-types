import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC1155Holder, ERC1155HolderInterface } from "../ERC1155Holder";
type ERC1155HolderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC1155Holder__factory extends ContractFactory {
    constructor(...args: ERC1155HolderConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ERC1155Holder>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ERC1155Holder;
    connect(signer: Signer): ERC1155Holder__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506104d18061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061003f575f3560e01c806301ffc9a714610043578063bc197c811461006b578063f23a6e61146100d4575b5f5ffd5b6100566100513660046101a4565b61010c565b60405190151581526020015b60405180910390f35b6100a3610079366004610398565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610062565b6100a36100e2366004610447565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000148061019e57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b5f602082840312156101b4575f5ffd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146101e3575f5ffd5b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461020d575f5ffd5b919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561028657610286610212565b604052919050565b5f82601f83011261029d575f5ffd5b813567ffffffffffffffff8111156102b7576102b7610212565b8060051b6102c76020820161023f565b918252602081850181019290810190868411156102e2575f5ffd5b6020860192505b838310156103045782358252602092830192909101906102e9565b9695505050505050565b5f82601f83011261031d575f5ffd5b813567ffffffffffffffff81111561033757610337610212565b61036860207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161023f565b81815284602083860101111561037c575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f5f60a086880312156103ac575f5ffd5b6103b5866101ea565b94506103c3602087016101ea565b9350604086013567ffffffffffffffff8111156103de575f5ffd5b6103ea8882890161028e565b935050606086013567ffffffffffffffff811115610406575f5ffd5b6104128882890161028e565b925050608086013567ffffffffffffffff81111561042e575f5ffd5b61043a8882890161030e565b9150509295509295909350565b5f5f5f5f5f60a0868803121561045b575f5ffd5b610464866101ea565b9450610472602087016101ea565b93506040860135925060608601359150608086013567ffffffffffffffff81111561042e575f5ffdfea26469706673582212202a9ed5a0d252918e4d101496b566edcd2c14e300d6aef9ff3653a821f17e1b0d64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "onERC1155BatchReceived";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "onERC1155Received";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "supportsInterface";
        readonly inputs: readonly [{
            readonly name: "interfaceId";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): ERC1155HolderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1155Holder;
}
export {};
