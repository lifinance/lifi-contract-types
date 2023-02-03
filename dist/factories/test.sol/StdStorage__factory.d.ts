import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { StdStorage, StdStorageInterface } from "../../test.sol/StdStorage";
declare type StdStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StdStorage__factory extends ContractFactory {
    constructor(...args: StdStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<StdStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): StdStorage;
    connect(signer: Signer): StdStorage__factory;
    static readonly bytecode = "0x6102ee61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063535849391461003a575b600080fd5b61004d610048366004610125565b61005f565b60405190815260200160405180910390f35b60008060006020855111610074578451610077565b60205b905060005b818110156100ea5761008f816008610227565b8661009a838861023e565b815181106100aa576100aa610251565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016901c9290921791806100e281610280565b91505061007c565b50909150505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806040838503121561013857600080fd5b823567ffffffffffffffff8082111561015057600080fd5b818501915085601f83011261016457600080fd5b813581811115610176576101766100f6565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156101bc576101bc6100f6565b816040528281528860208487010111156101d557600080fd5b826020860160208301376000602093820184015298969091013596505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820281158282048414176100f0576100f06101f8565b808201808211156100f0576100f06101f8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036102b1576102b16101f8565b506001019056fea2646970667358221220560f5b461ddfeaf247433055e23dab94a4976490a7664dbcba83a81ac216023a64736f6c63430008110033";
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
        anonymous?: undefined;
    })[];
    static createInterface(): StdStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StdStorage;
}
export {};
