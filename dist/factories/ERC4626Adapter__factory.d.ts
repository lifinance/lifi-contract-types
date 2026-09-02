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
    static readonly bytecode = "0x60a0604052306080523480156012575f5ffd5b50608051610afc6100325f395f818161028501526105d60152610afc5ff3fe608060405234801561000f575f5ffd5b506004361061006f575f3560e01c8063ae1c160c1161004d578063ae1c160c146100bf578063d9caed12146100f7578063eaed003b1461010a575f5ffd5b806308f9923c1461007357806318300a24146100995780638340f549146100ac575b5f5ffd5b6100866100813660046109c6565b61011d565b6040519081526020015b60405180910390f35b6100866100a73660046109c6565b6101b6565b6100866100ba3660046109fd565b61026d565b6100d26100cd366004610a3b565b6104ac565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610090565b6100866101053660046109fd565b6105be565b6100866101183660046109c6565b6107f3565b6040517f402d267d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301525f919084169063402d267d906024015b602060405180830381865afa15801561018b573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101af9190610a56565b9392505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301525f91908416906307a2d13a9082906370a0823190602401602060405180830381865afa15801561022b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061024f9190610a56565b6040518263ffffffff1660e01b815260040161017091815260200190565b5f73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630036102dd576040517f3921c70300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa158015610347573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061036b9190610a56565b905061037885858561084a565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810184905230602482015273ffffffffffffffffffffffffffffffffffffffff851690636e553f65906044016020604051808303815f875af11580156103e8573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061040c9190610a56565b506040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa158015610475573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104999190610a56565b6104a39082610a6d565b95945050505050565b5f8173ffffffffffffffffffffffffffffffffffffffff163b5f036104fd576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610546573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061056a9190610aab565b905073ffffffffffffffffffffffffffffffffffffffff81166105b9576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b5f73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016300361062e576040517f3921c70300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa158015610698573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106bc9190610a56565b6040517fb460af94000000000000000000000000000000000000000000000000000000008152600481018590523060248201819052604482015290915073ffffffffffffffffffffffffffffffffffffffff85169063b460af94906064016020604051808303815f875af1158015610736573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061075a9190610a56565b506040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152819073ffffffffffffffffffffffffffffffffffffffff8716906370a0823190602401602060405180830381865afa1580156107c5573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107e99190610a56565b6104a39190610a6d565b6040517fce96cb7700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301525f919084169063ce96cb7790602401610170565b6108568383835f61091a565b6109155761086783835f600161091a565b6108ba576040517f5274afe700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024015b60405180910390fd5b6108c7838383600161091a565b610915576040517f5274afe700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024016108b1565b505050565b6040517f095ea7b3000000000000000000000000000000000000000000000000000000005f81815273ffffffffffffffffffffffffffffffffffffffff8616600452602485905291602083604481808b5af1925060015f5114831661099657838315161561098a573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b73ffffffffffffffffffffffffffffffffffffffff811681146109c3575f5ffd5b50565b5f5f604083850312156109d7575f5ffd5b82356109e2816109a2565b915060208301356109f2816109a2565b809150509250929050565b5f5f5f60608486031215610a0f575f5ffd5b8335610a1a816109a2565b92506020840135610a2a816109a2565b929592945050506040919091013590565b5f60208284031215610a4b575f5ffd5b81356101af816109a2565b5f60208284031215610a66575f5ffd5b5051919050565b81810381811115610aa5577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b92915050565b5f60208284031215610abb575f5ffd5b81516101af816109a256fea26469706673582212205abd4def152a0bc3eae82d351ccebafef702fd1777a185ffff2ec37c177c8bb164736f6c634300081d0033";
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
        readonly name: "maxDepositableValue";
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
        readonly name: "maxWithdrawableValue";
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
        readonly name: "DirectCallNotAllowed";
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
