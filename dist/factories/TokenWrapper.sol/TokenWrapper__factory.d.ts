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
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516105ac3803806105ac83398101604081905261002f916100bb565b600080546001600160a01b0319166001600160a01b03831690811790915560405163095ea7b360e01b8152306004820152600019602482015263095ea7b3906044016020604051808303816000875af1158015610090573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b491906100eb565b505061010d565b6000602082840312156100cd57600080fd5b81516001600160a01b03811681146100e457600080fd5b9392505050565b6000602082840312156100fd57600080fd5b815180151581146100e457600080fd5b6104908061011c6000396000f3fe6080604052600436106100385760003560e01c80633ccfd60b14610044578063996c6cc31461005b578063d0e30db0146100b157600080fd5b3661003f57005b600080fd5b34801561005057600080fd5b506100596100b9565b005b34801561006757600080fd5b506000546100889073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100596102f9565b600080546040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015610128573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014c9190610418565b6000546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810183905291925073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303816000875af11580156101ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ee9190610431565b506000546040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690632e1a7d4d90602401600060405180830381600087803b15801561025b57600080fd5b505af115801561026f573d6000803e3d6000fd5b50506040516000925033915083908381818185875af1925050503d80600081146102b5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ba565b606091505b50509050806102f5576040517f1a0263ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561036157600080fd5b505af1158015610375573d6000803e3d6000fd5b50506000546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015234602482015273ffffffffffffffffffffffffffffffffffffffff909116935063a9059cbb925060440190506020604051808303816000875af11580156103f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104159190610431565b50565b60006020828403121561042a57600080fd5b5051919050565b60006020828403121561044357600080fd5b8151801515811461045357600080fd5b939250505056fea2646970667358221220d873265d323f2be9abb318381476df6f78bcf6d63cb1316e52ca68a902d87c8864736f6c63430008110033";
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
