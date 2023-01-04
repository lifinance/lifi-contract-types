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
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620023fa380380620023fa833981016040819052620000349162000134565b600080546001600160a01b038088166001600160a01b031992831617835560028054888316908416811790915560058054888416908516179055600380549287169290931691909117909155600483905560405190917f806d08432293677cc7e3e0f9443dcf0459f82567573d5094da6e9e6129dea4ab91a26040516001600160a01b038416907fcc6aaf791b8b7c6167981db821320441082903e27343e380dca76afd5807577d90600090a260405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a250505050506200019b565b80516001600160a01b03811681146200012f57600080fd5b919050565b600080600080600060a086880312156200014d57600080fd5b620001588662000117565b9450620001686020870162000117565b9350620001786040870162000117565b9250620001886060870162000117565b9150608086015190509295509295909350565b61224f80620001ab6000396000f3fe6080604052600436106101125760003560e01c80637aacd8f8116100a5578063bcf225e611610074578063e30c397811610059578063e30c3978146102de578063f2fde38b146102fe578063fd614f411461031e57600080fd5b8063bcf225e61461029a578063c34c08e5146102be57600080fd5b80637aacd8f81461021a5780638199c1051461023a5780638da5cb5b1461025a578063ab8236f31461027a57600080fd5b80633184cc22116100e15780633184cc22146101b25780634f91bc2b146101d257806351b78b47146101e55780637200b8291461020557600080fd5b80630517cb761461011e5780631c3c0ea81461015b57806323452b9c1461017d5780632e1445791461019257600080fd5b3661011957005b600080fd5b34801561012a57600080fd5b5060025461013e906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561016757600080fd5b5061017b610176366004611955565b61033e565b005b34801561018957600080fd5b5061017b6103e4565b34801561019e57600080fd5b5061017b6101ad366004611979565b610494565b3480156101be57600080fd5b5061017b6101cd3660046119ba565b610555565b61017b6101e0366004611b17565b6105cc565b3480156101f157600080fd5b5061017b610200366004611955565b61071e565b34801561021157600080fd5b5061017b6107c4565b34801561022657600080fd5b5060055461013e906001600160a01b031681565b34801561024657600080fd5b5061017b610255366004611955565b610883565b34801561026657600080fd5b5060005461013e906001600160a01b031681565b34801561028657600080fd5b5061017b610295366004611c8b565b610929565b3480156102a657600080fd5b506102b060045481565b604051908152602001610152565b3480156102ca57600080fd5b5060035461013e906001600160a01b031681565b3480156102ea57600080fd5b5060015461013e906001600160a01b031681565b34801561030a57600080fd5b5061017b610319366004611955565b610a2b565b34801561032a57600080fd5b5061017b610339366004611d2f565b610b55565b6000546001600160a01b03163314610382576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040517f3e3c5e6d5b512eaa5d5a80669846cfbaf8bde70fc6f7a3be9828cffc9ba5f1db90600090a250565b6000546001600160a01b03163314610428576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546001600160a01b031661046a576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6000546001600160a01b031633146104d8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b03831661053c576040516001600160a01b038316908290600081818185875af1925050503d806000811461052f576040519150601f19603f3d011682016040523d82523d6000602084013e610534565b606091505b505050505050565b6105506001600160a01b0384168383610c50565b505050565b6000546001600160a01b03163314610599576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600481905560405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a250565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610647576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556001600160a01b03831661066d5761066885858585346000610cf9565b610714565b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201523060248201526000906001600160a01b0385169063dd62ed3e90604401602060405180830381865afa1580156106d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f79190611db2565b90506107038482611057565b61071286868686856000610cf9565b505b6000905550505050565b6000546001600160a01b03163314610762576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040517f806d08432293677cc7e3e0f9443dcf0459f82567573d5094da6e9e6129dea4ab90600090a250565b6001546001600160a01b0316338114610809576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6000546001600160a01b031633146108c7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600580547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040517fcc6aaf791b8b7c6167981db821320441082903e27343e380dca76afd5807577d90600090a250565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016109a4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556002546001600160a01b031633146109ec576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080600084806020019051810190610a059190611f73565b93505092509250610a1b838389848a6001610cf9565b5050600090915550505050505050565b6000546001600160a01b03163314610a6f576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038116610aaf576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336001600160a01b03821603610af1576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610bd0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556005546001600160a01b03163314610c18576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008083806020019051810190610c2f9190611fe0565b91509150610c42898389848c6000610cf9565b505060009055505050505050565b6040516001600160a01b0383166024820152604481018290526105509084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526111b8565b600081610d07576000610d0b565b6004545b90506001600160a01b038516610ea357818015610d275750805a105b15610dd6576040516001600160a01b038516908490600081818185875af1925050503d8060008114610d75576040519150601f19603f3d011682016040523d82523d6000602084013e610d7a565b606091505b5050604080516001600160a01b038089168252871660208201529081018590524260608201528891507f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a250610534565b6003546001600160a01b0316634f91bc2b84835a610df49190612061565b908a8a8a8a6040518763ffffffff1660e01b8152600401610e1894939291906120a6565b6000604051808303818589803b158015610e3157600080fd5b5088f19450505050508015610e44575060015b610e9e576040516001600160a01b038516908490600081818185875af1925050503d8060008114610e91576040519150601f19603f3d011682016040523d82523d6000602084013e610e96565b606091505b50505061104e565b61104e565b6003548590610ec0906001600160a01b03808416911660006112b7565b600354610eda906001600160a01b0383811691168661141f565b828015610ee65750815a105b15610f5957610eff6001600160a01b0382168686610c50565b604080516001600160a01b0380891682528716602082015290810185905242606082015288907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25050610534565b6003546001600160a01b0316634f91bc2b835a610f769190612061565b8a8a8a8a6040518663ffffffff1660e01b8152600401610f9994939291906120a6565b600060405180830381600088803b158015610fb357600080fd5b5087f193505050508015610fc5575060015b61103157610fdd6001600160a01b0382168686610c50565b604080516001600160a01b0380891682528716602082015290810185905242606082015288907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b60035461104c906001600160a01b03838116911660006112b7565b505b50505050505050565b6001600160a01b0382166110a3578034101561109f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b806000036110dd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa15801561113d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111619190611db2565b9050818110156111ac576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61055083333085611509565b600061120d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166116e79092919063ffffffff16565b805190915015610550578080602001905181019061122b91906121ba565b610550576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016111a3565b80158061134a57506040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611324573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113489190611db2565b155b6113d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016111a3565b6040516001600160a01b0383166024820152604481018290526105509084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610c95565b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611489573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ad9190611db2565b6114b791906121d7565b6040516001600160a01b0385166024820152604481018290529091506115039085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610c95565b50505050565b6001600160a01b038416611549576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038216611589576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b03838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156115ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116119190611db2565b905061161f828686866116fe565b6040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152849183918516906370a0823190602401602060405180830381865afa158015611682573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a69190611db2565b6116b09190612061565b14610534576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60606116f6848460008561174f565b949350505050565b6040516001600160a01b03808516602483015283166044820152606481018290526115039085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610c95565b6060824710156117e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016111a3565b600080866001600160a01b031685876040516117fd91906121ea565b60006040518083038185875af1925050503d806000811461183a576040519150601f19603f3d011682016040523d82523d6000602084013e61183f565b606091505b50915091506118508783838761185b565b979650505050505050565b606083156118e45782516000036118dd576001600160a01b0385163b6118dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016111a3565b50816116f6565b6116f683838151156118f95781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111a39190612206565b6001600160a01b038116811461194257600080fd5b50565b80356119508161192d565b919050565b60006020828403121561196757600080fd5b81356119728161192d565b9392505050565b60008060006060848603121561198e57600080fd5b83356119998161192d565b925060208401356119a98161192d565b929592945050506040919091013590565b6000602082840312156119cc57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611a2557611a256119d3565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611a5457611a546119d3565b604052919050565b600067ffffffffffffffff821115611a7657611a766119d3565b5060051b60200190565b600067ffffffffffffffff821115611a9a57611a9a6119d3565b50601f01601f191660200190565b600082601f830112611ab957600080fd5b8135611acc611ac782611a80565b611a2b565b818152846020838601011115611ae157600080fd5b816020850160208301376000918101602001919091529392505050565b801515811461194257600080fd5b803561195081611afe565b60008060008060808587031215611b2d57600080fd5b84359350602085013567ffffffffffffffff80821115611b4c57600080fd5b818701915087601f830112611b6057600080fd5b8135611b6e611ac782611a5c565b8082825260208201915060208360051b86010192508a831115611b9057600080fd5b602085015b83811015611c5d578481351115611bab57600080fd5b8035860160e0601f19828f03011215611bc357600080fd5b611bcb611a02565b611bd760208301611945565b8152611be560408301611945565b6020820152611bf660608301611945565b6040820152611c0760808301611945565b606082015260a0820135608082015260c082013587811115611c2857600080fd5b611c378f602083860101611aa8565b60a083015250611c4960e08301611b0c565b60c082015284525060209283019201611b95565b508097505050505050611c7260408601611945565b9150611c8060608601611945565b905092959194509250565b60008060008060008060c08789031215611ca457600080fd5b863561ffff81168114611cb657600080fd5b9550602087013567ffffffffffffffff80821115611cd357600080fd5b611cdf8a838b01611aa8565b96506040890135955060608901359150611cf88261192d565b9093506080880135925060a08801359080821115611d1557600080fd5b50611d2289828a01611aa8565b9150509295509295509295565b60008060008060008060c08789031215611d4857600080fd5b86359550602087013594506040870135611d618161192d565b93506060870135611d718161192d565b9250608087013563ffffffff81168114611d8a57600080fd5b915060a087013567ffffffffffffffff811115611da657600080fd5b611d2289828a01611aa8565b600060208284031215611dc457600080fd5b5051919050565b80516119508161192d565b60005b83811015611df1578181015183820152602001611dd9565b50506000910152565b600082601f830112611e0b57600080fd5b8151611e19611ac782611a80565b818152846020838601011115611e2e57600080fd5b6116f6826020830160208701611dd6565b805161195081611afe565b600082601f830112611e5b57600080fd5b81516020611e6b611ac783611a5c565b82815260059290921b84018101918181019086841115611e8a57600080fd5b8286015b84811015611f6857805167ffffffffffffffff80821115611eaf5760008081fd5b818901915060e080601f19848d03011215611eca5760008081fd5b611ed2611a02565b611edd888501611dcb565b81526040611eec818601611dcb565b898301526060611efd818701611dcb565b8284015260809150611f10828701611dcb565b818401525060a0808601518284015260c091508186015185811115611f355760008081fd5b611f438f8c838a0101611dfa565b828501525050611f54838601611e3f565b908201528652505050918301918301611e8e565b509695505050505050565b60008060008060808587031215611f8957600080fd5b84519350602085015167ffffffffffffffff811115611fa757600080fd5b611fb387828801611e4a565b9350506040850151611fc48161192d565b6060860151909250611fd58161192d565b939692955090935050565b60008060408385031215611ff357600080fd5b825167ffffffffffffffff81111561200a57600080fd5b61201685828601611e4a565b92505060208301516120278161192d565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561207457612074612032565b92915050565b60008151808452612092816020860160208601611dd6565b601f01601f19169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b83811015612184577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a8403018552815180516001600160a01b039081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e0898601819052906121588287018261207a565b91505060c08083015192506121708187018415159052565b5095870195935050908501906001016120d4565b50506001600160a01b038a16604089015295506121a2945050505050565b6001600160a01b038316606083015295945050505050565b6000602082840312156121cc57600080fd5b815161197281611afe565b8082018082111561207457612074612032565b600082516121fc818460208701611dd6565b9190910192915050565b602081526000611972602083018461207a56fea2646970667358221220e6651934c7c16b8851c48e22422b9e8480bbab62cff0caf4a342d7269d95d3c964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_sgRouter";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_amarokRouter";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_executor";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_recoverGas";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NewOwnerMustNotBeSelf";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoNullOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoPendingOwnershipTransfer";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotPendingOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnAuthorized";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "router";
            readonly type: "address";
        }];
        readonly name: "AmarokRouterSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "executor";
            readonly type: "address";
        }];
        readonly name: "ExecutorSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferRecovered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "LiFiTransferStarted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferRequested";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "recoverGas";
            readonly type: "uint256";
        }];
        readonly name: "RecoverGasSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "router";
            readonly type: "address";
        }];
        readonly name: "StargateRouterSet";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "amarokRouter";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "cancelOwnershipTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "confirmOwnershipTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "executor";
        readonly outputs: readonly [{
            readonly internalType: "contract IExecutor";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pendingOwner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "assetId";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "pullToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "recoverGas";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_amarokRouter";
            readonly type: "address";
        }];
        readonly name: "setAmarokRouter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_executor";
            readonly type: "address";
        }];
        readonly name: "setExecutor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_recoverGas";
            readonly type: "uint256";
        }];
        readonly name: "setRecoverGas";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_sgRouter";
            readonly type: "address";
        }];
        readonly name: "setStargateRouter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_payload";
            readonly type: "bytes";
        }];
        readonly name: "sgReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "sgRouter";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_transactionId";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "_swapData";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "assetId";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "swapAndCompleteBridgeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_transferId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_asset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_callData";
            readonly type: "bytes";
        }];
        readonly name: "xReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Receiver;
}
export {};
