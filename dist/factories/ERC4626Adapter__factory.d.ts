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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50610bca8061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610064575f3560e01c8063ae1c160c1161004d578063ae1c160c146100a1578063d9caed12146100d9578063eaed003b146100ec575f5ffd5b806318300a24146100685780638340f5491461008e575b5f5ffd5b61007b610076366004610a94565b6100ff565b6040519081526020015b60405180910390f35b61007b61009c366004610acb565b6101fc565b6100b46100af366004610b09565b6103cd565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610085565b61007b6100e7366004610acb565b6104df565b61007b6100fa366004610a94565b6106a6565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301525f91908416906307a2d13a9082906370a0823190602401602060405180830381865afa158015610174573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101989190610b24565b6040518263ffffffff1660e01b81526004016101b691815260200190565b602060405180830381865afa1580156101d1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101f59190610b24565b9392505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f90819073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa158015610268573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061028c9190610b24565b9050610299858585610918565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810184905230602482015273ffffffffffffffffffffffffffffffffffffffff851690636e553f65906044016020604051808303815f875af1158015610309573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061032d9190610b24565b506040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa158015610396573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103ba9190610b24565b6103c49082610b3b565b95945050505050565b5f8173ffffffffffffffffffffffffffffffffffffffff163b5f0361041e576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610467573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061048b9190610b79565b905073ffffffffffffffffffffffffffffffffffffffff81166104da576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f90819073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa15801561054b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061056f9190610b24565b6040517fb460af94000000000000000000000000000000000000000000000000000000008152600481018590523060248201819052604482015290915073ffffffffffffffffffffffffffffffffffffffff85169063b460af94906064016020604051808303815f875af11580156105e9573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061060d9190610b24565b506040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152819073ffffffffffffffffffffffffffffffffffffffff8716906370a0823190602401602060405180830381865afa158015610678573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061069c9190610b24565b6103c49190610b3b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301525f9182918516906370a0823190602401602060405180830381865afa158015610714573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107389190610b24565b6040517fd905777e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301529192505f9186169063d905777e90602401602060405180830381865afa1580156107a7573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107cb9190610b24565b90505f8282106107db57826107dd565b815b6040517f07a2d13a0000000000000000000000000000000000000000000000000000000081526004810182905290915073ffffffffffffffffffffffffffffffffffffffff8716906307a2d13a90602401602060405180830381865afa158015610849573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061086d9190610b24565b6040517fce96cb7700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff87811660048301529195505f9188169063ce96cb7790602401602060405180830381865afa1580156108dc573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109009190610b24565b90508481101561090e578094505b5050505092915050565b6109248383835f6109e8565b6109e35761093583835f60016109e8565b610988576040517f5274afe700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024015b60405180910390fd5b61099583838360016109e8565b6109e3576040517f5274afe700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260240161097f565b505050565b6040517f095ea7b3000000000000000000000000000000000000000000000000000000005f81815273ffffffffffffffffffffffffffffffffffffffff8616600452602485905291602083604481808b5af1925060015f51148316610a64578383151615610a58573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610a91575f5ffd5b50565b5f5f60408385031215610aa5575f5ffd5b8235610ab081610a70565b91506020830135610ac081610a70565b809150509250929050565b5f5f5f60608486031215610add575f5ffd5b8335610ae881610a70565b92506020840135610af881610a70565b929592945050506040919091013590565b5f60208284031215610b19575f5ffd5b81356101f581610a70565b5f60208284031215610b34575f5ffd5b5051919050565b81810381811115610b73577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b92915050565b5f60208284031215610b89575f5ffd5b81516101f581610a7056fea2646970667358221220c5bb741f95566d5247650dc906d4fdcc9d55b94da485654ced50167e83426a5a64736f6c634300081d0033";
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
