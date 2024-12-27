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
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051620023fc380380620023fc8339810160408190526100319161007c565b600080546001600160a01b0319166001600160a01b038316908117825560405190917f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a991a2506100ac565b60006020828403121561008e57600080fd5b81516001600160a01b03811681146100a557600080fd5b9392505050565b61234080620000bc6000396000f3fe6080604052600436106100745760003560e01c80637f555b031161004e5780637f555b031461011b578063a83cbaa31461016d578063bc197c8114610180578063f23a6e61146101c557600080fd5b806301ffc9a714610080578063150b7a02146100b55780634f91bc2b1461010657600080fd5b3661007b57005b600080fd5b34801561008c57600080fd5b506100a061009b366004611c61565b61020a565b60405190151581526020015b60405180910390f35b3480156100c157600080fd5b506100d56100d0366004611ddb565b6102a3565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100ac565b610119610114366004611e93565b6102cd565b005b34801561012757600080fd5b506000546101489073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ac565b61011961017b366004611f07565b61036e565b34801561018c57600080fd5b506100d561019b366004611ff8565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b3480156101d157600080fd5b506100d56101e03660046120a6565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000148061029d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7f150b7a02000000000000000000000000000000000000000000000000000000005b949350505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610348576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018160000181905550610363868686868660006001610409565b600090555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103e9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556103fd8787878787876000610409565b60009055505050505050565b60008080888861041a60018261210f565b81811061042957610429612149565b905060200281019061043b9190612178565b61044c9060808101906060016121b6565b905073ffffffffffffffffffffffffffffffffffffffff81161561047a57610473816106e2565b9150610491565b34610484826106e2565b61048e919061210f565b91505b73ffffffffffffffffffffffffffffffffffffffff871615610604576104b6876106e2565b92508315610567576040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff89169063dd62ed3e90604401602060405180830381865afa158015610531573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055591906121d3565b9050610561888261079a565b5061061b565b6000546040517f15dacbea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015233602483015230604483015260648201889052909116906315dacbea90608401600060405180830381600087803b1580156105e757600080fd5b505af11580156105fb573d6000803e3d6000fd5b5050505061061b565b3461060e886106e2565b610618919061210f565b92505b6106278a8a8a8961091a565b6000610632886106e2565b90508381111561065057610650888861064b878561210f565b610c2c565b600061065b836106e2565b90508381111561067457610674838961064b878561210f565b6040805173ffffffffffffffffffffffffffffffffffffffff808c1682528a1660208201529081018290524260608201528c907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a2505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610793576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561076a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078e91906121d3565b61029d565b4792915050565b806000036107d4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661082d5780341015610829576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561089a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108be91906121d3565b905081811015610909576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61091583333085610c5d565b505050565b8282828160018114610b415760006109328585610e77565b90506000858561094360018661210f565b81811061095257610952612149565b90506020028101906109649190612178565b6109759060808101906060016121b6565b9050600088815b81811015610a565760005473ffffffffffffffffffffffffffffffffffffffff168c8c838181106109af576109af612149565b90506020028101906109c19190612178565b6109cf9060208101906121b6565b73ffffffffffffffffffffffffffffffffffffffff1603610a1c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368c8c83818110610a2f57610a2f612149565b9050602002810190610a419190612178565b9050610a4d8e82610f83565b5060010161097c565b505060005b610a6660018661210f565b811015610b38576000888883818110610a8157610a81612149565b9050602002810190610a939190612178565b610aa49060808101906060016121b6565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b2f57610ae2816106e2565b9250848281518110610af657610af6612149565b6020026020010151831115610b2f57610b2f8188878581518110610b1c57610b1c612149565b60200260200101518661064b919061210f565b50600101610a5b565b50505050610c22565b8560005b81811015610c1f5760005473ffffffffffffffffffffffffffffffffffffffff16898983818110610b7857610b78612149565b9050602002810190610b8a9190612178565b610b989060208101906121b6565b73ffffffffffffffffffffffffffffffffffffffff1603610be5576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b36898983818110610bf857610bf8612149565b9050602002810190610c0a9190612178565b9050610c168b82610f83565b50600101610b45565b50505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610c535761091583838361127b565b61091582826113fd565b73ffffffffffffffffffffffffffffffffffffffff8416610caa576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cf7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610d68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8c91906121d3565b9050610d9a82868686611527565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610e0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2e91906121d3565b610e38919061210f565b14610e6f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60608160008167ffffffffffffffff811115610e9557610e95611ccf565b604051908082528060200260200182016040528015610ebe578160200160208202803683370190505b5090506000805b83811015610f7857868682818110610edf57610edf612149565b9050602002810190610ef19190612178565b610f029060808101906060016121b6565b9150610f0d826106e2565b838281518110610f1f57610f1f612149565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f705734838281518110610f5857610f58612149565b60200260200101818151610f6c919061210f565b9052505b600101610ec5565b509095945050505050565b610f99610f9360208301836121b6565b3b151590565b610fcf576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361100f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061103e61102460608501604086016121b6565b73ffffffffffffffffffffffffffffffffffffffff161590565b61104957600061104f565b82608001355b9050600061106b61106660608601604087016121b6565b6106e2565b9050600061108261106660808701606088016121b6565b9050826000036110b9576110b961109f60608701604088016121b6565b6110af60408801602089016121b6565b8760800135611603565b8460800135821015611104576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610900565b60008061111460208801886121b6565b73ffffffffffffffffffffffffffffffffffffffff168561113860a08a018a6121ec565b604051611146929190612251565b60006040518083038185875af1925050503d8060008114611183576040519150601f19603f3d011682016040523d82523d6000602084013e611188565b606091505b50915091508161119b5761119b8161173a565b60006111b061106660808a0160608b016121b6565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896111e160208b018b6121b6565b6111f160608c0160408d016121b6565b61120160808d0160608e016121b6565b8c60800135898711611213578661121d565b61121d8a8861210f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166112c8576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611315576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611382573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a691906121d3565b9050808211156113ec576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610900565b6113f7848484611744565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661144a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561148d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610900565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146114e7576040519150601f19603f3d011682016040523d82523d6000602084013e6114ec565b606091505b5050905080610915576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113f79085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261179a565b73ffffffffffffffffffffffffffffffffffffffff831661162357505050565b73ffffffffffffffffffffffffffffffffffffffff8216611670576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156116e5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170991906121d3565b10156109155761091583837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118a9565b8051602082018181fd5b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109159084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611581565b60006117fc826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166119999092919063ffffffff16565b905080516000148061181d57508080602001905181019061181d9190612261565b610915576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610900565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905261193584826119a8565b6113f75760405173ffffffffffffffffffffffffffffffffffffffff841660248201526000604482015261198f9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611581565b6113f7848261179a565b60606102c58484600085611a69565b60008060008473ffffffffffffffffffffffffffffffffffffffff16846040516119d291906122a7565b6000604051808303816000865af19150503d8060008114611a0f576040519150601f19603f3d011682016040523d82523d6000602084013e611a14565b606091505b5091509150818015611a3e575080511580611a3e575080806020019051810190611a3e9190612261565b8015611a60575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b606082471015611afb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610900565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611b2491906122a7565b60006040518083038185875af1925050503d8060008114611b61576040519150601f19603f3d011682016040523d82523d6000602084013e611b66565b606091505b5091509150611b7787838387611b82565b979650505050505050565b60608315611c18578251600003611c115773ffffffffffffffffffffffffffffffffffffffff85163b611c11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610900565b50816102c5565b6102c58383815115611c2d5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090091906122b9565b600060208284031215611c7357600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611ca357600080fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611ccc57600080fd5b50565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611d4557611d45611ccf565b604052919050565b600082601f830112611d5e57600080fd5b813567ffffffffffffffff811115611d7857611d78611ccf565b611da960207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611cfe565b818152846020838601011115611dbe57600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215611df157600080fd5b8435611dfc81611caa565b93506020850135611e0c81611caa565b925060408501359150606085013567ffffffffffffffff811115611e2f57600080fd5b611e3b87828801611d4d565b91505092959194509250565b60008083601f840112611e5957600080fd5b50813567ffffffffffffffff811115611e7157600080fd5b6020830191508360208260051b8501011115611e8c57600080fd5b9250929050565b600080600080600060808688031215611eab57600080fd5b85359450602086013567ffffffffffffffff811115611ec957600080fd5b611ed588828901611e47565b9095509350506040860135611ee981611caa565b91506060860135611ef981611caa565b809150509295509295909350565b60008060008060008060a08789031215611f2057600080fd5b86359550602087013567ffffffffffffffff811115611f3e57600080fd5b611f4a89828a01611e47565b9096509450506040870135611f5e81611caa565b92506060870135611f6e81611caa565b80925050608087013590509295509295509295565b600082601f830112611f9457600080fd5b8135602067ffffffffffffffff821115611fb057611fb0611ccf565b8160051b611fbf828201611cfe565b9283528481018201928281019087851115611fd957600080fd5b83870192505b84831015611b7757823582529183019190830190611fdf565b600080600080600060a0868803121561201057600080fd5b853561201b81611caa565b9450602086013561202b81611caa565b9350604086013567ffffffffffffffff8082111561204857600080fd5b61205489838a01611f83565b9450606088013591508082111561206a57600080fd5b61207689838a01611f83565b9350608088013591508082111561208c57600080fd5b5061209988828901611d4d565b9150509295509295909350565b600080600080600060a086880312156120be57600080fd5b85356120c981611caa565b945060208601356120d981611caa565b93506040860135925060608601359150608086013567ffffffffffffffff81111561210357600080fd5b61209988828901611d4d565b8181038181111561029d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126121ac57600080fd5b9190910192915050565b6000602082840312156121c857600080fd5b8135611ca381611caa565b6000602082840312156121e557600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261222157600080fd5b83018035915067ffffffffffffffff82111561223c57600080fd5b602001915036819003821315611e8c57600080fd5b8183823760009101908152919050565b60006020828403121561227357600080fd5b81518015158114611ca357600080fd5b60005b8381101561229e578181015183820152602001612286565b50506000910152565b600082516121ac818460208701612283565b60208152600082518060208401526122d8816040850160208701612283565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea26469706673582212207219bc6c01601ff828d647f9a7fe8b20de913db75bc282a00dc39fbd216599bc64736f6c63430008110033";
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
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): ExecutorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Executor;
}
export {};
