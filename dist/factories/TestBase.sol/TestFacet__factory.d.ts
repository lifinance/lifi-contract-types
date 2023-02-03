import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TestFacet, TestFacetInterface } from "../../TestBase.sol/TestFacet";
declare type TestFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestFacet__factory extends ContractFactory {
    constructor(...args: TestFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestFacet;
    connect(signer: Signer): TestFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061032d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063536db2661461003b578063c561c14814610050575b600080fd5b61004e610049366004610278565b610063565b005b61004e61005e3660046102b5565b61006f565b61006c816100ed565b50565b61006c817fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b6100f6816101da565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff161561014a575050565b73ffffffffffffffffffffffffffffffffffffffff909116600081815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b73ffffffffffffffffffffffffffffffffffffffff8116610227576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b60000361006c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006020828403121561028a57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146102ae57600080fd5b9392505050565b6000602082840312156102c757600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146102ae57600080fdfea2646970667358221220a1ac0a4a0e9029ef07108585cd0ddece06be40868163fa564bd1be612f3d83db64736f6c63430008110033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): TestFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestFacet;
}
export {};
