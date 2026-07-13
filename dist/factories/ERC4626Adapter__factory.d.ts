import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC4626Adapter, ERC4626AdapterInterface } from "../ERC4626Adapter";
type ERC4626AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC4626Adapter__factory extends ContractFactory {
    constructor(...args: ERC4626AdapterConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ERC4626Adapter>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ERC4626Adapter;
    connect(signer: Signer): ERC4626Adapter__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506109168061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061004a575f3560e01c806318300a241461004e5780638340f54914610074578063ae1c160c14610087578063d9caed12146100bf575b5f5ffd5b61006161005c3660046107e0565b6100d2565b6040519081526020015b60405180910390f35b610061610082366004610817565b6101cf565b61009a610095366004610855565b6103a0565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161006b565b6100616100cd366004610817565b61049d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301525f91908416906307a2d13a9082906370a0823190602401602060405180830381865afa158015610147573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061016b9190610870565b6040518263ffffffff1660e01b815260040161018991815260200190565b602060405180830381865afa1580156101a4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101c89190610870565b9392505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f90819073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa15801561023b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061025f9190610870565b905061026c858585610664565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810184905230602482015273ffffffffffffffffffffffffffffffffffffffff851690636e553f65906044016020604051808303815f875af11580156102dc573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103009190610870565b506040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa158015610369573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061038d9190610870565b6103979082610887565b95945050505050565b5f6017823b116103dc576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610425573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061044991906108c5565b905073ffffffffffffffffffffffffffffffffffffffff8116610498576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f90819073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa158015610509573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061052d9190610870565b6040517fb460af94000000000000000000000000000000000000000000000000000000008152600481018590523060248201819052604482015290915073ffffffffffffffffffffffffffffffffffffffff85169063b460af94906064016020604051808303815f875af11580156105a7573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105cb9190610870565b506040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152819073ffffffffffffffffffffffffffffffffffffffff8716906370a0823190602401602060405180830381865afa158015610636573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061065a9190610870565b6103979190610887565b6106708383835f610734565b61072f5761068183835f6001610734565b6106d4576040517f5274afe700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024015b60405180910390fd5b6106e18383836001610734565b61072f576040517f5274afe700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024016106cb565b505050565b6040517f095ea7b3000000000000000000000000000000000000000000000000000000005f81815273ffffffffffffffffffffffffffffffffffffffff8616600452602485905291602083604481808b5af1925060015f511483166107b05783831516156107a4573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b73ffffffffffffffffffffffffffffffffffffffff811681146107dd575f5ffd5b50565b5f5f604083850312156107f1575f5ffd5b82356107fc816107bc565b9150602083013561080c816107bc565b809150509250929050565b5f5f5f60608486031215610829575f5ffd5b8335610834816107bc565b92506020840135610844816107bc565b929592945050506040919091013590565b5f60208284031215610865575f5ffd5b81356101c8816107bc565b5f60208284031215610880575f5ffd5b5051919050565b818103818111156108bf577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b92915050565b5f602082840312156108d5575f5ffd5b81516101c8816107bc56fea26469706673582212204fd334b56def973643fa2e2379fafc582534c33a8c40df34cca9163b3ce53b6a64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "_asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "deposited";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "resolveAsset";
        readonly inputs: readonly [{
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalAssets";
        readonly inputs: readonly [{
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_holder";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "_asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "withdrawn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly name: "AssetResolutionFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SafeERC20FailedOperation";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    static createInterface(): ERC4626AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC4626Adapter;
}
export {};
