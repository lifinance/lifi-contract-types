import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Executor, ExecutorInterface } from "../Executor";
declare type ExecutorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Executor__factory extends ContractFactory {
    constructor(...args: ExecutorConstructorParams);
    deploy(_erc20Proxy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Executor>;
    getDeployTransaction(_erc20Proxy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Executor;
    connect(signer: Signer): Executor__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620025b9380380620025b9833981016040819052620000349162000080565b600080546001600160a01b0319166001600160a01b038316908117825560405190917f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a991a250620000b2565b6000602082840312156200009357600080fd5b81516001600160a01b0381168114620000ab57600080fd5b9392505050565b6124f780620000c26000396000f3fe6080604052600436106100745760003560e01c80637f555b031161004e5780637f555b031461011b578063a83cbaa31461016d578063bc197c8114610180578063f23a6e61146101c557600080fd5b806301ffc9a714610080578063150b7a02146100b55780634f91bc2b1461010657600080fd5b3661007b57005b600080fd5b34801561008c57600080fd5b506100a061009b366004611d7f565b61020a565b60405190151581526020015b60405180910390f35b3480156100c157600080fd5b506100d56100d0366004611f00565b6102a3565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100ac565b610119610114366004611fb8565b6102cd565b005b34801561012757600080fd5b506000546101489073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ac565b61011961017b36600461202c565b61036e565b34801561018c57600080fd5b506100d561019b36600461211d565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b3480156101d157600080fd5b506100d56101e03660046121cb565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000148061029d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7f150b7a02000000000000000000000000000000000000000000000000000000005b949350505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610348576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018160000181905550610363868686868660006001610409565b600090555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103e9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556103fd8787878787876000610409565b60009055505050505050565b60008080888861041a600182612263565b81811061042957610429612276565b905060200281019061043b91906122a5565b61044c9060808101906060016122e3565b905073ffffffffffffffffffffffffffffffffffffffff81161561047a57610473816106e2565b9150610491565b34610484826106e2565b61048e9190612263565b91505b73ffffffffffffffffffffffffffffffffffffffff871615610604576104b6876106e2565b92508315610567576040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff89169063dd62ed3e90604401602060405180830381865afa158015610531573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105559190612300565b9050610561888261079a565b5061061b565b6000546040517f15dacbea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015233602483015230604483015260648201889052909116906315dacbea90608401600060405180830381600087803b1580156105e757600080fd5b505af11580156105fb573d6000803e3d6000fd5b5050505061061b565b3461060e886106e2565b6106189190612263565b92505b6106278a8a8a8961091a565b6000610632886106e2565b90508381111561065057610650888861064b8785612263565b610c2c565b600061065b836106e2565b90508381111561067457610674838961064b8785612263565b6040805173ffffffffffffffffffffffffffffffffffffffff808c1682528a1660208201529081018290524260608201528c907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a2505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610793576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561076a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078e9190612300565b61029d565b4792915050565b806000036107d4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661082d5780341015610829576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561089a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108be9190612300565b905081811015610909576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61091583333085610c5d565b505050565b8282828160018114610b415760006109328585610e88565b905060008585610943600186612263565b81811061095257610952612276565b905060200281019061096491906122a5565b6109759060808101906060016122e3565b9050600088815b81811015610a565760005473ffffffffffffffffffffffffffffffffffffffff168c8c838181106109af576109af612276565b90506020028101906109c191906122a5565b6109cf9060208101906122e3565b73ffffffffffffffffffffffffffffffffffffffff1603610a1c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368c8c83818110610a2f57610a2f612276565b9050602002810190610a4191906122a5565b9050610a4d8e82610f94565b5060010161097c565b505060005b610a66600186612263565b811015610b38576000888883818110610a8157610a81612276565b9050602002810190610a9391906122a5565b610aa49060808101906060016122e3565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b2f57610ae2816106e2565b9250848281518110610af657610af6612276565b6020026020010151831115610b2f57610b2f8188878581518110610b1c57610b1c612276565b60200260200101518661064b9190612263565b50600101610a5b565b50505050610c22565b8560005b81811015610c1f5760005473ffffffffffffffffffffffffffffffffffffffff16898983818110610b7857610b78612276565b9050602002810190610b8a91906122a5565b610b989060208101906122e3565b73ffffffffffffffffffffffffffffffffffffffff1603610be5576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b36898983818110610bf857610bf8612276565b9050602002810190610c0a91906122a5565b9050610c168b82610f94565b50600101610b45565b50505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610c53576109158383836112c4565b6109158282611446565b73ffffffffffffffffffffffffffffffffffffffff8416610caa576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cf7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610d68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8c9190612300565b9050610d9a82868686611570565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015260009183918516906370a0823190602401602060405180830381865afa158015610e0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2f9190612300565b610e399190612263565b905083610e47826001612319565b1015610e7f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b60608160008167ffffffffffffffff811115610ea657610ea6611de6565b604051908082528060200260200182016040528015610ecf578160200160208202803683370190505b5090506000805b83811015610f8957868682818110610ef057610ef0612276565b9050602002810190610f0291906122a5565b610f139060808101906060016122e3565b9150610f1e826106e2565b838281518110610f3057610f30612276565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f815734838281518110610f6957610f69612276565b60200260200101818151610f7d9190612263565b9052505b600101610ed6565b509095945050505050565b610faa610fa460208301836122e3565b3b151590565b610fe0576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611020576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061104f61103560608501604086016122e3565b73ffffffffffffffffffffffffffffffffffffffff161590565b61105a576000611060565b82608001355b9050600061107c61107760608601604087016122e3565b6106e2565b9050600061109361107760808701606088016122e3565b9050826000036110ca576110ca6110b060608701604088016122e3565b6110c060408801602089016122e3565b876080013561164c565b8460800135821015611115576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610900565b60008061112560208801886122e3565b73ffffffffffffffffffffffffffffffffffffffff168561114960a08a018a61232c565b604051611157929190612391565b60006040518083038185875af1925050503d8060008114611194576040519150601f19603f3d011682016040523d82523d6000602084013e611199565b606091505b5091509150816111e45760006111ae8261178f565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090091906123c5565b60006111f961107760808a0160608b016122e3565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961122a60208b018b6122e3565b61123a60608c0160408d016122e3565b61124a60808d0160608e016122e3565b8c6080013589871161125c5786611266565b6112668a88612263565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611311576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661135e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156113cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ef9190612300565b905080821115611435576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610900565b61144084848461180d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611493576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156114d6576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610900565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611530576040519150601f19603f3d011682016040523d82523d6000602084013e611535565b606091505b5050905080610915576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526114409085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611863565b73ffffffffffffffffffffffffffffffffffffffff831661166c57505050565b73ffffffffffffffffffffffffffffffffffffffff82166116b9576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa15801561172e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117529190612300565b10156109155761176483836000611972565b61091583837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611972565b60606044825110156117d457505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b60006117f060048085516117e89190612263565b859190611af4565b9050808060200190518101906118069190612416565b9392505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109159084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115ca565b60006118c5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c0e9092919063ffffffff16565b90508051600014806118e65750808060200190518101906118e6919061248d565b610915576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610900565b801580611a1257506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156119ec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a109190612300565b155b611a9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610900565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109159084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115ca565b606081611b0281601f612319565b1015611b3a576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611b448284612319565b84511015611b7e576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611b9d5760405191506000825260208201604052611c05565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611bd6578051835260209283019201611bbe565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60606102c58484600085856000808673ffffffffffffffffffffffffffffffffffffffff168587604051611c4291906124af565b60006040518083038185875af1925050503d8060008114611c7f576040519150601f19603f3d011682016040523d82523d6000602084013e611c84565b606091505b5091509150611c9587838387611ca0565b979650505050505050565b60608315611d36578251600003611d2f5773ffffffffffffffffffffffffffffffffffffffff85163b611d2f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610900565b50816102c5565b6102c58383815115611d4b5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090091906123c5565b600060208284031215611d9157600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461180657600080fd5b73ffffffffffffffffffffffffffffffffffffffff81168114611de357600080fd5b50565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611e5c57611e5c611de6565b604052919050565b600067ffffffffffffffff821115611e7e57611e7e611de6565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611ebb57600080fd5b8135611ece611ec982611e64565b611e15565b818152846020838601011115611ee357600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215611f1657600080fd5b8435611f2181611dc1565b93506020850135611f3181611dc1565b925060408501359150606085013567ffffffffffffffff811115611f5457600080fd5b611f6087828801611eaa565b91505092959194509250565b60008083601f840112611f7e57600080fd5b50813567ffffffffffffffff811115611f9657600080fd5b6020830191508360208260051b8501011115611fb157600080fd5b9250929050565b600080600080600060808688031215611fd057600080fd5b85359450602086013567ffffffffffffffff811115611fee57600080fd5b611ffa88828901611f6c565b909550935050604086013561200e81611dc1565b9150606086013561201e81611dc1565b809150509295509295909350565b60008060008060008060a0878903121561204557600080fd5b86359550602087013567ffffffffffffffff81111561206357600080fd5b61206f89828a01611f6c565b909650945050604087013561208381611dc1565b9250606087013561209381611dc1565b80925050608087013590509295509295509295565b600082601f8301126120b957600080fd5b8135602067ffffffffffffffff8211156120d5576120d5611de6565b8160051b6120e4828201611e15565b92835284810182019282810190878511156120fe57600080fd5b83870192505b84831015611c9557823582529183019190830190612104565b600080600080600060a0868803121561213557600080fd5b853561214081611dc1565b9450602086013561215081611dc1565b9350604086013567ffffffffffffffff8082111561216d57600080fd5b61217989838a016120a8565b9450606088013591508082111561218f57600080fd5b61219b89838a016120a8565b935060808801359150808211156121b157600080fd5b506121be88828901611eaa565b9150509295509295909350565b600080600080600060a086880312156121e357600080fd5b85356121ee81611dc1565b945060208601356121fe81611dc1565b93506040860135925060608601359150608086013567ffffffffffffffff81111561222857600080fd5b6121be88828901611eaa565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561029d5761029d612234565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122d957600080fd5b9190910192915050565b6000602082840312156122f557600080fd5b813561180681611dc1565b60006020828403121561231257600080fd5b5051919050565b8082018082111561029d5761029d612234565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261236157600080fd5b83018035915067ffffffffffffffff82111561237c57600080fd5b602001915036819003821315611fb157600080fd5b8183823760009101908152919050565b60005b838110156123bc5781810151838201526020016123a4565b50506000910152565b60208152600082518060208401526123e48160408501602087016123a1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60006020828403121561242857600080fd5b815167ffffffffffffffff81111561243f57600080fd5b8201601f8101841361245057600080fd5b805161245e611ec982611e64565b81815285602083850101111561247357600080fd5b6124848260208301602086016123a1565b95945050505050565b60006020828403121561249f57600080fd5b8151801515811461180657600080fd5b600082516122d98184602087016123a156fea26469706673582212209d9291c9a9ce2ee02602bc08384cd74fc278d90dc253881912dae04a2492e06c64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_erc20Proxy";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "erc20Proxy";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Proxy";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "onERC1155BatchReceived";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "onERC1155Received";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "onERC721Received";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "supportsInterface";
        readonly inputs: readonly [{
            readonly name: "interfaceId";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
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
            readonly name: "_transferredAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndExecute";
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
            readonly name: "_transferredAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "ERC20ProxySet";
        readonly inputs: readonly [{
            readonly name: "proxy";
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
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
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
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): ExecutorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Executor;
}
export {};
