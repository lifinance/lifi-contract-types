import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC721Holder, ERC721HolderInterface } from "../ERC721Holder";
declare type ERC721HolderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC721Holder__factory extends ContractFactory {
    constructor(...args: ERC721HolderConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ERC721Holder>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ERC721Holder;
    connect(signer: Signer): ERC721Holder__factory;
    static readonly bytecode = "0x608060405234801561000f575f80fd5b506102178061001d5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063150b7a021461002d575b5f80fd5b61006461003b3660046100ee565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390f35b803573ffffffffffffffffffffffffffffffffffffffff811681146100bc575f80fd5b919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f805f8060808587031215610101575f80fd5b61010a85610099565b935061011860208601610099565b925060408501359150606085013567ffffffffffffffff8082111561013b575f80fd5b818701915087601f83011261014e575f80fd5b813581811115610160576101606100c1565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156101a6576101a66100c1565b816040528281528a60208487010111156101be575f80fd5b826020860160208301375f6020848301015280955050505050509295919450925056fea26469706673582212206c44b78d61ccabd526bb5b4f6b67efd976df2661c1a2392963547546a58a5c6d64736f6c63430008160033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "onERC721Received";
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
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ERC721HolderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721Holder;
}
export {};
