import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PermitHash, PermitHashInterface } from "../PermitHash";
type PermitHashConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PermitHash__factory extends ContractFactory {
    constructor(...args: PermitHashConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PermitHash>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PermitHash;
    connect(signer: Signer): PermitHash__factory;
    static readonly bytecode = "0x6103c761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100ad5760003560e01c806378f168301161008057806390bbf2f31161006557806390bbf2f31461019d578063c0c7fa7e146101a5578063c5df4f03146101ad57600080fd5b806378f168301461016157806384b8efbb1461018857600080fd5b80633eb8b8fd146100b2578063415e982d146100ec5780636302c3cf146101135780636e4f27751461013a575b600080fd5b6100d97ffcf35f5ac6a2c28868dc44c302166470266239195f02b0ee408334829333b76681565b6040519081526020015b60405180910390f35b6100d97f618358ac3db8dc274f0cd8829da7e234bd48cd73c4a740aede1adec9846d06a181565b6100d97faf1b0d30d2cab0380e68f0689007e3254993c596f2fdd0aaa7f4d04f7944086381565b6100d97f65626cad6cb96493bf6f5ebea28756c966f023ab9e8a83a7101849d5573b367881565b6100d97f939c21a48a8dbe3a9a2404a1d46691e4d39f6583d6ec6b35714604c986d8010681565b6101906101d4565b6040516100e39190610228565b6101906101f0565b61019061020c565b6100d97ff3841cd1ff0085026a6327b620b67997ce40f282c88a8e905a7a5626e310f3d081565b6040518060a001604052806064815260200161032e6064913981565b6040518060a00160405280606b8152602001610295606b913981565b6040518060600160405280602e8152602001610300602e913981565b600060208083528351808285015260005b8181101561025557858101830151858201604001528201610239565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050509291505056fe5065726d697442617463685769746e6573735472616e7366657246726f6d28546f6b656e5065726d697373696f6e735b5d207065726d69747465642c61646472657373207370656e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e652c546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e74295065726d69745769746e6573735472616e7366657246726f6d28546f6b656e5065726d697373696f6e73207065726d69747465642c61646472657373207370656e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e652ca2646970667358221220824acd3ab48de4048c07d00ecdd85cc80a28278505fb67646c22643d4fc5fb8364736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "_PERMIT_BATCH_TRANSFER_FROM_TYPEHASH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_PERMIT_BATCH_TYPEHASH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_PERMIT_BATCH_WITNESS_TRANSFER_FROM_TYPEHASH_STUB";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_PERMIT_DETAILS_TYPEHASH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_PERMIT_SINGLE_TYPEHASH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_PERMIT_TRANSFER_FROM_TYPEHASH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_PERMIT_TRANSFER_FROM_WITNESS_TYPEHASH_STUB";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_TOKEN_PERMISSIONS_TYPEHASH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_TOKEN_PERMISSIONS_TYPESTRING";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): PermitHashInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PermitHash;
}
export {};
