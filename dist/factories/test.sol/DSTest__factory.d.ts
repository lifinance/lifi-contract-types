import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { DSTest, DSTestInterface } from "../../test.sol/DSTest";
declare type DSTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DSTest__factory extends ContractFactory {
    constructor(...args: DSTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<DSTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): DSTest;
    connect(signer: Signer): DSTest__factory;
    static readonly bytecode = "0x60806040526000805460ff1916600117905534801561001d57600080fd5b5061029b8061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063ba414fa61461003b578063fa7626d414610057575b600080fd5b610043610064565b604051901515815260200160405180910390f35b6000546100439060ff1681565b60008054610100900460ff16156100845750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156101bf5760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c6564000000000000000000000000000000000000000000000000000082840152825180830384018152606083019093526000929091610129917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc4916080016101f4565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261016191610230565b6000604051808303816000865af19150503d806000811461019e576040519150601f19603f3d011682016040523d82523d6000602084013e6101a3565b606091505b50915050808060200190518101906101bb9190610243565b9150505b919050565b6000815160005b818110156101e557602081850181015186830152016101cb565b50600093019283525090919050565b7fffffffff0000000000000000000000000000000000000000000000000000000083168152600061022860048301846101c4565b949350505050565b600061023c82846101c4565b9392505050565b60006020828403121561025557600080fd5b8151801515811461023c57600080fdfea26469706673582212201367699f4ab789651e73c9e2305c8dd97bfad3789b125b91848c8794634226a464736f6c63430008110033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): DSTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DSTest;
}
export {};
