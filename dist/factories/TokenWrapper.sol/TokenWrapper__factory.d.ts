import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TokenWrapper, TokenWrapperInterface } from "../../TokenWrapper.sol/TokenWrapper";
declare type TokenWrapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TokenWrapper__factory extends ContractFactory {
    constructor(...args: TokenWrapperConstructorParams);
    deploy(_wrappedToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TokenWrapper>;
    getDeployTransaction(_wrappedToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TokenWrapper;
    connect(signer: Signer): TokenWrapper__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161055038038061055083398101604081905261002f916100bb565b600080546001600160a01b0319166001600160a01b03831690811790915560405163095ea7b360e01b8152306004820152600019602482015263095ea7b3906044016020604051808303816000875af1158015610090573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b491906100eb565b505061010d565b6000602082840312156100cd57600080fd5b81516001600160a01b03811681146100e457600080fd5b9392505050565b6000602082840312156100fd57600080fd5b815180151581146100e457600080fd5b6104348061011c6000396000f3fe6080604052600436106100385760003560e01c80633ccfd60b14610044578063996c6cc31461005b578063d0e30db0146100b157600080fd5b3661003f57005b600080fd5b34801561005057600080fd5b506100596100b9565b005b34801561006757600080fd5b506000546100889073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b610059610280565b600080546040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015610128573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014c91906103bc565b6000546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810183905291925073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303816000875af11580156101ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ee91906103d5565b506000546040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690632e1a7d4d90602401600060405180830381600087803b15801561025b57600080fd5b505af115801561026f573d6000803e3d6000fd5b5050505061027d338261039c565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b1580156102e857600080fd5b505af11580156102fc573d6000803e3d6000fd5b50506000546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015234602482015273ffffffffffffffffffffffffffffffffffffffff909116935063a9059cbb925060440190506020604051808303816000875af1158015610378573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027d91906103d5565b60003860003884865af16103b85763b12d13eb6000526004601cfd5b5050565b6000602082840312156103ce57600080fd5b5051919050565b6000602082840312156103e757600080fd5b815180151581146103f757600080fd5b939250505056fea2646970667358221220670f87cfbd16e3bf8688e62de59cf0e2522b07ff13142a13d7b57539853daa3a64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_wrappedToken";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "wrappedToken";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "error";
        readonly name: "WithdrawFailure";
        readonly inputs: readonly [];
    }];
    static createInterface(): TokenWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenWrapper;
}
export {};
