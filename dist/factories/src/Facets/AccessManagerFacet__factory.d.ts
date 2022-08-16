import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AccessManagerFacet, AccessManagerFacetInterface } from "../../../src/Facets/AccessManagerFacet";
declare type AccessManagerFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AccessManagerFacet__factory extends ContractFactory {
    constructor(...args: AccessManagerFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AccessManagerFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AccessManagerFacet;
    connect(signer: Signer): AccessManagerFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610412806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063612ad9cb1461003b578063a4c3366e146100d7575b600080fd5b6100c361004936600461035d565b7fffffffff000000000000000000000000000000000000000000000000000000009190911660009081527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020908152604080832073ffffffffffffffffffffffffffffffffffffffff9094168352929052205460ff1690565b604051901515815260200160405180910390f35b6100ea6100e5366004610390565b6100ec565b005b6100f4610235565b80610195577fffffffff00000000000000000000000000000000000000000000000000000000831660009081527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020908152604080832073ffffffffffffffffffffffffffffffffffffffff86168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055505050565b507fffffffff000000000000000000000000000000000000000000000000000000009190911660009081527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020908152604080832073ffffffffffffffffffffffffffffffffffffffff9490941683529290522080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610302576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201527f6572000000000000000000000000000000000000000000000000000000000000606482015260840160405180910390fd5b565b80357fffffffff000000000000000000000000000000000000000000000000000000008116811461033457600080fd5b919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461033457600080fd5b6000806040838503121561037057600080fd5b61037983610304565b915061038760208401610339565b90509250929050565b6000806000606084860312156103a557600080fd5b6103ae84610304565b92506103bc60208501610339565b9150604084013580151581146103d157600080fd5b80915050925092509256fea2646970667358221220dfcb60f07a091c1eb652106d1c2e4a2b1244d45714b9a406c02c3a3bdffd08c664736f6c634300080d0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): AccessManagerFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AccessManagerFacet;
}
export {};
