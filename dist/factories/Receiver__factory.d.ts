import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Receiver, ReceiverInterface } from "../Receiver";
declare type ReceiverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Receiver__factory extends ContractFactory {
    constructor(...args: ReceiverConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _sgRouter: PromiseOrValue<string>, _amarokRouter: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Receiver>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _sgRouter: PromiseOrValue<string>, _amarokRouter: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Receiver;
    connect(signer: Signer): Receiver__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200255b3803806200255b833981016040819052620000349162000134565b600080546001600160a01b038088166001600160a01b031992831617835560028054888316908416811790915560058054888416908516179055600380549287169290931691909117909155600483905560405190917f806d08432293677cc7e3e0f9443dcf0459f82567573d5094da6e9e6129dea4ab91a26040516001600160a01b038416907fcc6aaf791b8b7c6167981db821320441082903e27343e380dca76afd5807577d90600090a260405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a250505050506200019b565b80516001600160a01b03811681146200012f57600080fd5b919050565b600080600080600060a086880312156200014d57600080fd5b620001588662000117565b9450620001686020870162000117565b9350620001786040870162000117565b9250620001886060870162000117565b9150608086015190509295509295909350565b6123b080620001ab6000396000f3fe6080604052600436106100d65760003560e01c80638da5cb5b1161007f578063c34c08e511610059578063c34c08e514610236578063e30c397814610263578063f2fde38b14610290578063fd614f41146102b057600080fd5b80638da5cb5b146101c5578063ab8236f3146101f2578063bcf225e61461021257600080fd5b80634f91bc2b116100b05780634f91bc2b146101705780637200b829146101835780637aacd8f81461019857600080fd5b806301e33667146100e25780630517cb761461010457806323452b9c1461015b57600080fd5b366100dd57005b600080fd5b3480156100ee57600080fd5b506101026100fd3660046119e3565b6102d0565b005b34801561011057600080fd5b506002546101319073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561016757600080fd5b5061010261045a565b61010261017e366004611ba4565b610524565b34801561018f57600080fd5b50610102610690565b3480156101a457600080fd5b506005546101319073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101d157600080fd5b506000546101319073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101fe57600080fd5b5061010261020d366004611d36565b610776565b34801561021e57600080fd5b5061022860045481565b604051908152602001610152565b34801561024257600080fd5b506003546101319073ffffffffffffffffffffffffffffffffffffffff1681565b34801561026f57600080fd5b506001546101319073ffffffffffffffffffffffffffffffffffffffff1681565b34801561029c57600080fd5b506101026102ab366004611dda565b6108b3565b3480156102bc57600080fd5b506101026102cb366004611dfe565b610a11565b60005473ffffffffffffffffffffffffffffffffffffffff163314610321576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166103dc5760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610396576040519150601f19603f3d011682016040523d82523d6000602084013e61039b565b606091505b50509050806103d6576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506103fd565b6103fd73ffffffffffffffffffffffffffffffffffffffff84168383610b19565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104ab576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166104fa576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161059f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815573ffffffffffffffffffffffffffffffffffffffff83166105d2576105cd85858585346000610b68565b610686565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff85169063dd62ed3e90604401602060405180830381865afa158015610645573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106699190611e81565b90506106758482610f2f565b61068486868686856000610b68565b505b6000905550505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146106e2576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016107f1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560025473ffffffffffffffffffffffffffffffffffffffff163314610846576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008060008480602001905181019061085f9190612060565b935050925092506108a38383600085511161087a578961089a565b8460008151811061088d5761088d6120cd565b6020026020010151604001515b848a6001610b68565b5050600090915550505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610904576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610951576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036109a0576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610a8c576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560055473ffffffffffffffffffffffffffffffffffffffff163314610ae1576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008083806020019051810190610af891906120fc565b91509150610b0b898389848c6000610b68565b505060009055505050505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610b5e576390b8ec186000526004601cfd5b6000603452505050565b600081610b76576000610b7a565b6004545b905073ffffffffffffffffffffffffffffffffffffffff8516610d0c5760005a9050828015610ba857508181105b15610c1e57610bb785856110af565b6040805173ffffffffffffffffffffffffffffffffffffffff80891682528716602082015290810185905242606082015288907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25050610f27565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b85610c47858561217d565b908b8b8b8b6040518763ffffffff1660e01b8152600401610c6b94939291906121e0565b6000604051808303818589803b158015610c8457600080fd5b5088f19450505050508015610c97575060015b610d0657610ca585856110af565b6040805173ffffffffffffffffffffffffffffffffffffffff80891682528716602082015290810185905242606082015288907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b50610f25565b60005a6003549091508690610d3c9073ffffffffffffffffffffffffffffffffffffffff808416911660006110cb565b838015610d4857508282105b15610dd657610d6e73ffffffffffffffffffffffffffffffffffffffff821687876112cb565b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2505050610f27565b600354610dfd9073ffffffffffffffffffffffffffffffffffffffff838116911687611321565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b610e25858561217d565b8b8b8b8b6040518663ffffffff1660e01b8152600401610e4894939291906121e0565b600060405180830381600088803b158015610e6257600080fd5b5087f193505050508015610e74575060015b610efa57610e9973ffffffffffffffffffffffffffffffffffffffff821687876112cb565b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b600354610f229073ffffffffffffffffffffffffffffffffffffffff838116911660006110cb565b50505b505b505050505050565b80600003610f69576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610fc25780341015610fbe576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561102f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110539190611e81565b90508181101561109e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6110aa83333085611420565b505050565b60003860003884865af1610fbe5763b12d13eb6000526004601cfd5b80158061116b57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611145573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111699190611e81565b155b6111f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401611095565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526110aa9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611632565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526110aa9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611249565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611397573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113bb9190611e81565b905061141a847f095ea7b300000000000000000000000000000000000000000000000000000000856113ed868661231b565b60405173ffffffffffffffffffffffffffffffffffffffff90921660248301526044820152606401611249565b50505050565b73ffffffffffffffffffffffffffffffffffffffff841661146d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166114ba576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561152b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061154f9190611e81565b905061155d82868686611741565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156115cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115f19190611e81565b6115fb919061217d565b14610f27576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611694826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661179f9092919063ffffffff16565b90508051600014806116b55750808060200190518101906116b5919061232e565b6110aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401611095565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261141a9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611249565b60606117ae84846000856117b6565b949350505050565b606082471015611848576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401611095565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611871919061234b565b60006040518083038185875af1925050503d80600081146118ae576040519150601f19603f3d011682016040523d82523d6000602084013e6118b3565b606091505b50915091506118c4878383876118cf565b979650505050505050565b6060831561196557825160000361195e5773ffffffffffffffffffffffffffffffffffffffff85163b61195e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611095565b50816117ae565b6117ae838381511561197a5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110959190612367565b73ffffffffffffffffffffffffffffffffffffffff811681146119d057600080fd5b50565b80356119de816119ae565b919050565b6000806000606084860312156119f857600080fd5b8335611a03816119ae565b92506020840135611a13816119ae565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611a7657611a76611a24565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611ac357611ac3611a24565b604052919050565b600067ffffffffffffffff821115611ae557611ae5611a24565b5060051b60200190565b600067ffffffffffffffff821115611b0957611b09611a24565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611b4657600080fd5b8135611b59611b5482611aef565b611a7c565b818152846020838601011115611b6e57600080fd5b816020850160208301376000918101602001919091529392505050565b80151581146119d057600080fd5b80356119de81611b8b565b60008060008060808587031215611bba57600080fd5b84359350602085013567ffffffffffffffff80821115611bd957600080fd5b818701915087601f830112611bed57600080fd5b8135611bfb611b5482611acb565b8082825260208201915060208360051b86010192508a831115611c1d57600080fd5b602085015b83811015611d08578481351115611c3857600080fd5b8035860160e07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828f03011215611c6e57600080fd5b611c76611a53565b611c82602083016119d3565b8152611c90604083016119d3565b6020820152611ca1606083016119d3565b6040820152611cb2608083016119d3565b606082015260a0820135608082015260c082013587811115611cd357600080fd5b611ce28f602083860101611b35565b60a083015250611cf460e08301611b99565b60c082015284525060209283019201611c22565b508097505050505050611d1d604086016119d3565b9150611d2b606086016119d3565b905092959194509250565b60008060008060008060c08789031215611d4f57600080fd5b863561ffff81168114611d6157600080fd5b9550602087013567ffffffffffffffff80821115611d7e57600080fd5b611d8a8a838b01611b35565b96506040890135955060608901359150611da3826119ae565b9093506080880135925060a08801359080821115611dc057600080fd5b50611dcd89828a01611b35565b9150509295509295509295565b600060208284031215611dec57600080fd5b8135611df7816119ae565b9392505050565b60008060008060008060c08789031215611e1757600080fd5b86359550602087013594506040870135611e30816119ae565b93506060870135611e40816119ae565b9250608087013563ffffffff81168114611e5957600080fd5b915060a087013567ffffffffffffffff811115611e7557600080fd5b611dcd89828a01611b35565b600060208284031215611e9357600080fd5b5051919050565b80516119de816119ae565b60005b83811015611ec0578181015183820152602001611ea8565b50506000910152565b600082601f830112611eda57600080fd5b8151611ee8611b5482611aef565b818152846020838601011115611efd57600080fd5b6117ae826020830160208701611ea5565b80516119de81611b8b565b600082601f830112611f2a57600080fd5b81516020611f3a611b5483611acb565b82815260059290921b84018101918181019086841115611f5957600080fd5b8286015b8481101561205557805167ffffffffffffffff80821115611f7e5760008081fd5b818901915060e0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848d03011215611fb75760008081fd5b611fbf611a53565b611fca888501611e9a565b81526040611fd9818601611e9a565b898301526060611fea818701611e9a565b8284015260809150611ffd828701611e9a565b818401525060a0808601518284015260c0915081860151858111156120225760008081fd5b6120308f8c838a0101611ec9565b828501525050612041838601611f0e565b908201528652505050918301918301611f5d565b509695505050505050565b6000806000806080858703121561207657600080fd5b84519350602085015167ffffffffffffffff81111561209457600080fd5b6120a087828801611f19565b93505060408501516120b1816119ae565b60608601519092506120c2816119ae565b939692955090935050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000806040838503121561210f57600080fd5b825167ffffffffffffffff81111561212657600080fd5b61213285828601611f19565b9250506020830151612143816119ae565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156121905761219061214e565b92915050565b600081518084526121ae816020860160208601611ea5565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b838110156122cb577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e08986018190529061229f82870182612196565b91505060c08083015192506122b78187018415159052565b50958701959350509085019060010161220e565b505073ffffffffffffffffffffffffffffffffffffffff8a16604089015295506122f6945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b808201808211156121905761219061214e565b60006020828403121561234057600080fd5b8151611df781611b8b565b6000825161235d818460208701611ea5565b9190910192915050565b602081526000611df7602083018461219656fea26469706673582212209fb04051bce1555c1245023db8e9a913d597dae5abba8c46afd4e2dec269eb0964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_sgRouter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amarokRouter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_recoverGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "amarokRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "executor";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IExecutor";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "recoverGas";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "sgReceive";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amountLD";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_payload";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sgRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "swapAndCompleteBridgeTokens";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdrawToken";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "xReceive";
        readonly inputs: readonly [{
            readonly name: "_transferId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "AmarokRouterSet";
        readonly inputs: readonly [{
            readonly name: "router";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ExecutorSet";
        readonly inputs: readonly [{
            readonly name: "executor";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RecoverGasSet";
        readonly inputs: readonly [{
            readonly name: "recoverGas";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "StargateRouterSet";
        readonly inputs: readonly [{
            readonly name: "router";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "TokensWithdrawn";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address payable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "ExternalCallFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Receiver;
}
export {};
