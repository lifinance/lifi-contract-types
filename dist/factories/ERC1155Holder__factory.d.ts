import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC1155Holder, ERC1155HolderInterface } from "../ERC1155Holder";
declare type ERC1155HolderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x608060405234801561000f575f80fd5b506104ce8061001d5f395ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c806301ffc9a714610043578063bc197c811461006b578063f23a6e61146100d4575b5f80fd5b6100566100513660046101a4565b61010c565b60405190151581526020015b60405180910390f35b6100a3610079366004610395565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610062565b6100a36100e2366004610438565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000148061019e57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b5f602082840312156101b4575f80fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146101e3575f80fd5b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461020d575f80fd5b919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561028657610286610212565b604052919050565b5f82601f83011261029d575f80fd5b8135602067ffffffffffffffff8211156102b9576102b9610212565b8160051b6102c882820161023f565b92835284810182019282810190878511156102e1575f80fd5b83870192505b84831015610300578235825291830191908301906102e7565b979650505050505050565b5f82601f83011261031a575f80fd5b813567ffffffffffffffff81111561033457610334610212565b61036560207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161023f565b818152846020838601011115610379575f80fd5b816020850160208301375f918101602001919091529392505050565b5f805f805f60a086880312156103a9575f80fd5b6103b2866101ea565b94506103c0602087016101ea565b9350604086013567ffffffffffffffff808211156103dc575f80fd5b6103e889838a0161028e565b945060608801359150808211156103fd575f80fd5b61040989838a0161028e565b9350608088013591508082111561041e575f80fd5b5061042b8882890161030b565b9150509295509295909350565b5f805f805f60a0868803121561044c575f80fd5b610455866101ea565b9450610463602087016101ea565b93506040860135925060608601359150608086013567ffffffffffffffff81111561048c575f80fd5b61042b8882890161030b56fea264697066735822122089612c104bf849273effd7af4929c70a8a707281d78b04ed7b7f42c211d54f9664736f6c63430008160033";
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
