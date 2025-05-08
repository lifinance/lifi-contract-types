import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Patcher, PatcherInterface } from "../Patcher";
declare type PatcherConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Patcher__factory extends ContractFactory {
    constructor(...args: PatcherConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Patcher>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Patcher;
    connect(signer: Signer): Patcher__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506109658061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610034575f3560e01c80634d91497914610038578063efae576b14610062575b5f5ffd5b61004b61004636600461058d565b610075565b604051610059929190610685565b60405180910390f35b61004b6100703660046106e1565b61009f565b5f606061008b8d8d8d8d8d8d8d8d8d8d8d6100c7565b915091509b509b9950505050505050505050565b5f60606100b48c8c8c8c8c8c8c8c8c8c610187565b915091509a509a98505050505050505050565b5f60608b8a1415806100d957508b8414155b15610110576040517f568efce200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f87878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505090506101668e8e8e8e8a8a87610201565b6101728a8a83876102ac565b92509250509b509b9950505050505050505050565b5f60605f6101968d8d8d610397565b90505f88888080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152509293506101e092508391508990508885610447565b6101ec8b8b83886102ac565b9350935050509a509a98505050505050505050565b5f5b868110156102a2575f61025f898984818110610221576102216107ba565b905060200201602081019061023691906107e7565b888885818110610248576102486107ba565b905060200281019061025a9190610807565b610397565b9050365f868685818110610275576102756107ba565b90506020028101906102879190610868565b9150915061029785838386610447565b505050600101610203565b5050505050505050565b5f60608215610322578573ffffffffffffffffffffffffffffffffffffffff16846040516102da91906108cc565b5f60405180830381855af49150503d805f8114610312576040519150601f19603f3d011682016040523d82523d5f602084013e610317565b606091505b50909250905061038e565b8573ffffffffffffffffffffffffffffffffffffffff16858560405161034891906108cc565b5f6040518083038185875af1925050503d805f8114610382576040519150601f19603f3d011682016040523d82523d5f602084013e610387565b606091505b5090925090505b94509492505050565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1685856040516103c19291906108e2565b5f60405180830381855afa9150503d805f81146103f9576040519150601f19603f3d011682016040523d82523d5f602084013e6103fe565b606091505b50915091508161043a576040517f9711393900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6020015195945050505050565b5f5b8281101561047c5761047485858584818110610467576104676107ba565b9050602002013584610483565b600101610449565b5050505050565b82516104908360206108f1565b11156104c8576040517faaf9032800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b910160200152565b5f5f83601f8401126104e0575f5ffd5b50813567ffffffffffffffff8111156104f7575f5ffd5b6020830191508360208260051b8501011115610511575f5ffd5b9250929050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461053b575f5ffd5b919050565b5f5f83601f840112610550575f5ffd5b50813567ffffffffffffffff811115610567575f5ffd5b602083019150836020828501011115610511575f5ffd5b8035801515811461053b575f5ffd5b5f5f5f5f5f5f5f5f5f5f5f60e08c8e0312156105a7575f5ffd5b8b3567ffffffffffffffff8111156105bd575f5ffd5b6105c98e828f016104d0565b909c509a505060208c013567ffffffffffffffff8111156105e8575f5ffd5b6105f48e828f016104d0565b909a509850610607905060408d01610518565b965060608c0135955060808c013567ffffffffffffffff811115610629575f5ffd5b6106358e828f01610540565b90965094505060a08c013567ffffffffffffffff811115610654575f5ffd5b6106608e828f016104d0565b9094509250610673905060c08d0161057e565b90509295989b509295989b9093969950565b8215158152604060208201525f82518060408401528060208501606085015e5f6060828501015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150509392505050565b5f5f5f5f5f5f5f5f5f5f60e08b8d0312156106fa575f5ffd5b6107038b610518565b995060208b013567ffffffffffffffff81111561071e575f5ffd5b61072a8d828e01610540565b909a50985061073d905060408c01610518565b965060608b0135955060808b013567ffffffffffffffff81111561075f575f5ffd5b61076b8d828e01610540565b90965094505060a08b013567ffffffffffffffff81111561078a575f5ffd5b6107968d828e016104d0565b90945092506107a9905060c08c0161057e565b90509295989b9194979a5092959850565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f602082840312156107f7575f5ffd5b61080082610518565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261083a575f5ffd5b83018035915067ffffffffffffffff821115610854575f5ffd5b602001915036819003821315610511575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261089b575f5ffd5b83018035915067ffffffffffffffff8211156108b5575f5ffd5b6020019150600581901b3603821315610511575f5ffd5b5f82518060208501845e5f920191825250919050565b818382375f9101908152919050565b80820180821115610929577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9291505056fea26469706673582212207946c147e3d81e13aab127e24b368e36ca0a42e0a7b900ae9f32d7b90946cf7d64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "executeWithDynamicPatches";
        readonly inputs: readonly [{
            readonly name: "valueSource";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "valueGetter";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "finalTarget";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "offsets";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "delegateCall";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "success";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "returnData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "executeWithMultiplePatches";
        readonly inputs: readonly [{
            readonly name: "valueSources";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "valueGetters";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "finalTarget";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "offsetGroups";
            readonly type: "uint256[][]";
            readonly internalType: "uint256[][]";
        }, {
            readonly name: "delegateCall";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "success";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "returnData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly name: "FailedToGetDynamicValue";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidPatchOffset";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "MismatchedArrayLengths";
        readonly inputs: readonly [];
    }];
    static createInterface(): PatcherInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Patcher;
}
export {};
