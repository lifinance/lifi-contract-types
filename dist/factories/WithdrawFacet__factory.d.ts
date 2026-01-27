import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WithdrawFacet, WithdrawFacetInterface } from "../WithdrawFacet";
type WithdrawFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061060d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631458d7ad1461003b578063d9caed1214610050575b600080fd5b61004e6100493660046104d5565b610063565b005b61004e61005e366004610586565b6101a7565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100a9576100a96101fd565b60006017873b11806100e7576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff16878760405161010e9291906105c7565b6000604051808303816000865af19150503d806000811461014b576040519150601f19603f3d011682016040523d82523d6000602084013e610150565b606091505b5090925050811561016b5761016685858561029d565b61019d565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146101ed576101ed6101fd565b6101f883838361029d565b505050565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff90911615151461029a576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b600073ffffffffffffffffffffffffffffffffffffffff8316156102c157826102c3565b335b90506102d0848284610329565b6040805173ffffffffffffffffffffffffffffffffffffffff8381168252602082018590528616917f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099910160405180910390a250505050565b73ffffffffffffffffffffffffffffffffffffffff831661034e576101f88282610359565b6101f88383836103ca565b73ffffffffffffffffffffffffffffffffffffffff82166103a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103c673ffffffffffffffffffffffffffffffffffffffff831682610438565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610417576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101f873ffffffffffffffffffffffffffffffffffffffff84168383610454565b60003860003884865af16103c65763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610499576390b8ec186000526004601cfd5b6000603452505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461029a57600080fd5b80356104d0816104a3565b919050565b60008060008060008060a087890312156104ee57600080fd5b86356104f9816104a3565b9550602087013567ffffffffffffffff8082111561051657600080fd5b818901915089601f83011261052a57600080fd5b81358181111561053957600080fd5b8a602082850101111561054b57600080fd5b6020830197508096505050506040870135610565816104a3565b9250610573606088016104c5565b9150608087013590509295509295509295565b60008060006060848603121561059b57600080fd5b83356105a6816104a3565b925060208401356105b6816104a3565b929592945050506040919091013590565b818382376000910190815291905056fea26469706673582212209ead11c812d40da5b142076fc4552b10f6db2bec6e63735f91db4d25923e9afa64736f6c63430008110033";
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
