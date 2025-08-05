import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC721Holder, ERC721HolderInterface } from "../ERC721Holder";
type ERC721HolderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5061023e8061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610029575f3560e01c8063150b7a021461002d575b5f5ffd5b61006461003b3660046100ee565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390f35b803573ffffffffffffffffffffffffffffffffffffffff811681146100bc575f5ffd5b919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f5f5f5f60808587031215610101575f5ffd5b61010a85610099565b935061011860208601610099565b925060408501359150606085013567ffffffffffffffff81111561013a575f5ffd5b8501601f8101871361014a575f5ffd5b803567ffffffffffffffff811115610164576101646100c1565b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160116810181811067ffffffffffffffff821117156101d0576101d06100c1565b6040528181528282016020018910156101e7575f5ffd5b816020840160208301375f602083830101528093505050509295919450925056fea264697066735822122017b31d2c0ffb7df864d8d8ddb12d8398299aec0e9464166f038e9fd7193fd74964736f6c634300081d0033";
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
