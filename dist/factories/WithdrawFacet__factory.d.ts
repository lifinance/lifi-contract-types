import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WithdrawFacet, WithdrawFacetInterface } from "../WithdrawFacet";
declare type WithdrawFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WithdrawFacet__factory extends ContractFactory {
    constructor(...args: WithdrawFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<WithdrawFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): WithdrawFacet;
    connect(signer: Signer): WithdrawFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061062d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631458d7ad1461003b578063d9caed1214610050575b600080fd5b61004e6100493660046104f5565b610063565b005b61004e61005e3660046105a6565b6101c7565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100a9576100a961021d565b6000863f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141580610107576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff16878760405161012e9291906105e7565b6000604051808303816000865af19150503d806000811461016b576040519150601f19603f3d011682016040523d82523d6000602084013e610170565b606091505b5090925050811561018b576101868585856102bd565b6101bd565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461020d5761020d61021d565b6102188383836102bd565b505050565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff9091161515146102ba576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b600073ffffffffffffffffffffffffffffffffffffffff8316156102e157826102e3565b335b90506102f0848284610349565b6040805173ffffffffffffffffffffffffffffffffffffffff8381168252602082018590528616917f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099910160405180910390a250505050565b73ffffffffffffffffffffffffffffffffffffffff831661036e576102188282610379565b6102188383836103ea565b73ffffffffffffffffffffffffffffffffffffffff82166103c6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103e673ffffffffffffffffffffffffffffffffffffffff831682610458565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610437576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61021873ffffffffffffffffffffffffffffffffffffffff84168383610474565b60003860003884865af16103e65763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166104b9576390b8ec186000526004601cfd5b6000603452505050565b73ffffffffffffffffffffffffffffffffffffffff811681146102ba57600080fd5b80356104f0816104c3565b919050565b60008060008060008060a0878903121561050e57600080fd5b8635610519816104c3565b9550602087013567ffffffffffffffff8082111561053657600080fd5b818901915089601f83011261054a57600080fd5b81358181111561055957600080fd5b8a602082850101111561056b57600080fd5b6020830197508096505050506040870135610585816104c3565b9250610593606088016104e5565b9150608087013590509295509295509295565b6000806000606084860312156105bb57600080fd5b83356105c6816104c3565b925060208401356105d6816104c3565b929592945050506040919091013590565b818382376000910190815291905056fea2646970667358221220bc1647ae8e84241c3670200e6aa7caead7fdc144c28d1b2bf5782f0b2d9c246064736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "executeCallAndWithdraw";
        readonly inputs: readonly [{
            readonly name: "_callTo";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "LogWithdraw";
        readonly inputs: readonly [{
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotAContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "WithdrawFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): WithdrawFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): WithdrawFacet;
}
export {};
