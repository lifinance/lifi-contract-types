import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Executor, ExecutorInterface } from "../Executor";
declare type ExecutorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Executor__factory extends ContractFactory {
    constructor(...args: ExecutorConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _erc20Proxy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Executor>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _erc20Proxy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Executor;
    connect(signer: Signer): Executor__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162002ace38038062002ace8339810160408190526200003491620000af565b600080546001600160a01b038085166001600160a01b03199283161783556002805491851691909216811790915560405190917f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a991a25050620000e7565b80516001600160a01b0381168114620000aa57600080fd5b919050565b60008060408385031215620000c357600080fd5b620000ce8362000092565b9150620000de6020840162000092565b90509250929050565b6129d780620000f76000396000f3fe6080604052600436106100d65760003560e01c80637f555b031161007f578063bc197c8111610059578063bc197c8114610259578063e30c39781461029e578063f23a6e61146102cb578063f2fde38b1461031057600080fd5b80637f555b03146101c75780638da5cb5b14610219578063a83cbaa31461024657600080fd5b80634f91bc2b116100b05780634f91bc2b1461017f5780635004a4b7146101925780637200b829146101b257600080fd5b806301ffc9a7146100e2578063150b7a021461011757806323452b9c1461016857600080fd5b366100dd57005b600080fd5b3480156100ee57600080fd5b506101026100fd36600461225f565b610330565b60405190151581526020015b60405180910390f35b34801561012357600080fd5b506101376101323660046123e0565b6103c9565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161010e565b34801561017457600080fd5b5061017d6103f3565b005b61017d61018d366004612498565b6104bd565b34801561019e57600080fd5b5061017d6101ad36600461250c565b61055e565b3480156101be57600080fd5b5061017d61061e565b3480156101d357600080fd5b506002546101f49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010e565b34801561022557600080fd5b506000546101f49073ffffffffffffffffffffffffffffffffffffffff1681565b61017d610254366004612529565b610704565b34801561026557600080fd5b5061013761027436600461261a565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b3480156102aa57600080fd5b506001546101f49073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102d757600080fd5b506101376102e63660046126c8565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b34801561031c57600080fd5b5061017d61032b36600461250c565b61079f565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e00000000000000000000000000000000000000000000000000000000014806103c357507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7f150b7a02000000000000000000000000000000000000000000000000000000005b949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610444576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610493576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610538576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181600001819055506105538686868686600060016108fd565b600090555050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105af576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a990600090a250565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610670576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161077f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561079387878787878760006108fd565b60009055505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107f0576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661083d576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361088c576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60008080888861090e600182612760565b81811061091d5761091d612773565b905060200281019061092f91906127a2565b61094090608081019060600161250c565b905073ffffffffffffffffffffffffffffffffffffffff81161561096e5761096781610bd6565b9150610985565b3461097882610bd6565b6109829190612760565b91505b73ffffffffffffffffffffffffffffffffffffffff871615610af8576109aa87610bd6565b92508315610a5b576040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff89169063dd62ed3e90604401602060405180830381865afa158015610a25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4991906127e0565b9050610a558882610c8e565b50610b0f565b6002546040517f15dacbea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015233602483015230604483015260648201889052909116906315dacbea90608401600060405180830381600087803b158015610adb57600080fd5b505af1158015610aef573d6000803e3d6000fd5b50505050610b0f565b34610b0288610bd6565b610b0c9190612760565b92505b610b1b8a8a8a89610e0e565b6000610b2688610bd6565b905083811115610b4457610b448888610b3f8785612760565b611120565b6000610b4f83610bd6565b905083811115610b6857610b688389610b3f8785612760565b6040805173ffffffffffffffffffffffffffffffffffffffff808c1682528a1660208201529081018290524260608201528c907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a2505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610c87576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610c5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8291906127e0565b6103c3565b4792915050565b80600003610cc8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d215780341015610d1d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610d8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db291906127e0565b905081811015610dfd576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610e0983333085611151565b505050565b8282828160018114611035576000610e26858561136b565b905060008585610e37600186612760565b818110610e4657610e46612773565b9050602002810190610e5891906127a2565b610e6990608081019060600161250c565b9050600088815b81811015610f4a5760025473ffffffffffffffffffffffffffffffffffffffff168c8c83818110610ea357610ea3612773565b9050602002810190610eb591906127a2565b610ec390602081019061250c565b73ffffffffffffffffffffffffffffffffffffffff1603610f10576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368c8c83818110610f2357610f23612773565b9050602002810190610f3591906127a2565b9050610f418e82611477565b50600101610e70565b505060005b610f5a600186612760565b81101561102c576000888883818110610f7557610f75612773565b9050602002810190610f8791906127a2565b610f9890608081019060600161250c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461102357610fd681610bd6565b9250848281518110610fea57610fea612773565b602002602001015183111561102357611023818887858151811061101057611010612773565b602002602001015186610b3f9190612760565b50600101610f4f565b50505050611116565b8560005b818110156111135760025473ffffffffffffffffffffffffffffffffffffffff1689898381811061106c5761106c612773565b905060200281019061107e91906127a2565b61108c90602081019061250c565b73ffffffffffffffffffffffffffffffffffffffff16036110d9576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368989838181106110ec576110ec612773565b90506020028101906110fe91906127a2565b905061110a8b82611477565b50600101611039565b50505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83161561114757610e098383836117a7565b610e098282611929565b73ffffffffffffffffffffffffffffffffffffffff841661119e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111eb576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561125c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061128091906127e0565b905061128e82868686611a53565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156112fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132291906127e0565b61132c9190612760565b14611363576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60608160008167ffffffffffffffff811115611389576113896122c6565b6040519080825280602002602001820160405280156113b2578160200160208202803683370190505b5090506000805b8381101561146c578686828181106113d3576113d3612773565b90506020028101906113e591906127a2565b6113f690608081019060600161250c565b915061140182610bd6565b83828151811061141357611413612773565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611464573483828151811061144c5761144c612773565b602002602001018181516114609190612760565b9052505b6001016113b9565b509095945050505050565b61148d611487602083018361250c565b3b151590565b6114c3576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611503576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611532611518606085016040860161250c565b73ffffffffffffffffffffffffffffffffffffffff161590565b61153d576000611543565b82608001355b9050600061155f61155a606086016040870161250c565b610bd6565b9050600061157661155a608087016060880161250c565b9050826000036115ad576115ad611593606087016040880161250c565b6115a3604088016020890161250c565b8760800135611b2f565b84608001358210156115f8576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610df4565b600080611608602088018861250c565b73ffffffffffffffffffffffffffffffffffffffff168561162c60a08a018a6127f9565b60405161163a92919061285e565b60006040518083038185875af1925050503d8060008114611677576040519150601f19603f3d011682016040523d82523d6000602084013e61167c565b606091505b5091509150816116c757600061169182611c72565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df49190612892565b60006116dc61155a60808a0160608b0161250c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961170d60208b018b61250c565b61171d60608c0160408d0161250c565b61172d60808d0160608e0161250c565b8c6080013589871161173f5786611749565b6117498a88612760565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166117f4576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611841576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156118ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118d291906127e0565b905080821115611918576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610df4565b611923848484611cf0565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611976576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156119b9576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610df4565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611a13576040519150601f19603f3d011682016040523d82523d6000602084013e611a18565b606091505b5050905080610e09576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526119239085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d46565b73ffffffffffffffffffffffffffffffffffffffff8316611b4f57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611b9c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611c11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c3591906127e0565b1015610e0957611c4783836000611e52565b610e0983837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611e52565b6060604482511015611cb757505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611cd36004808551611ccb9190612760565b859190611fd4565b905080806020019051810190611ce991906128e3565b9392505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610e099084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611aad565b6000611da8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166120ee9092919063ffffffff16565b805190915015610e095780806020019051810190611dc6919061295a565b610e09576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610df4565b801580611ef257506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611ecc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ef091906127e0565b155b611f7e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610df4565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610e099084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611aad565b606081611fe281601f61297c565b101561201a576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612024828461297c565b8451101561205e576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561207d57604051915060008252602082016040526120e5565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156120b657805183526020928301920161209e565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60606103eb8484600085856000808673ffffffffffffffffffffffffffffffffffffffff168587604051612122919061298f565b60006040518083038185875af1925050503d806000811461215f576040519150601f19603f3d011682016040523d82523d6000602084013e612164565b606091505b509150915061217587838387612180565b979650505050505050565b6060831561221657825160000361220f5773ffffffffffffffffffffffffffffffffffffffff85163b61220f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610df4565b50816103eb565b6103eb838381511561222b5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df49190612892565b60006020828403121561227157600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611ce957600080fd5b73ffffffffffffffffffffffffffffffffffffffff811681146122c357600080fd5b50565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561233c5761233c6122c6565b604052919050565b600067ffffffffffffffff82111561235e5761235e6122c6565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261239b57600080fd5b81356123ae6123a982612344565b6122f5565b8181528460208386010111156123c357600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080608085870312156123f657600080fd5b8435612401816122a1565b93506020850135612411816122a1565b925060408501359150606085013567ffffffffffffffff81111561243457600080fd5b6124408782880161238a565b91505092959194509250565b60008083601f84011261245e57600080fd5b50813567ffffffffffffffff81111561247657600080fd5b6020830191508360208260051b850101111561249157600080fd5b9250929050565b6000806000806000608086880312156124b057600080fd5b85359450602086013567ffffffffffffffff8111156124ce57600080fd5b6124da8882890161244c565b90955093505060408601356124ee816122a1565b915060608601356124fe816122a1565b809150509295509295909350565b60006020828403121561251e57600080fd5b8135611ce9816122a1565b60008060008060008060a0878903121561254257600080fd5b86359550602087013567ffffffffffffffff81111561256057600080fd5b61256c89828a0161244c565b9096509450506040870135612580816122a1565b92506060870135612590816122a1565b80925050608087013590509295509295509295565b600082601f8301126125b657600080fd5b8135602067ffffffffffffffff8211156125d2576125d26122c6565b8160051b6125e18282016122f5565b92835284810182019282810190878511156125fb57600080fd5b83870192505b8483101561217557823582529183019190830190612601565b600080600080600060a0868803121561263257600080fd5b853561263d816122a1565b9450602086013561264d816122a1565b9350604086013567ffffffffffffffff8082111561266a57600080fd5b61267689838a016125a5565b9450606088013591508082111561268c57600080fd5b61269889838a016125a5565b935060808801359150808211156126ae57600080fd5b506126bb8882890161238a565b9150509295509295909350565b600080600080600060a086880312156126e057600080fd5b85356126eb816122a1565b945060208601356126fb816122a1565b93506040860135925060608601359150608086013567ffffffffffffffff81111561272557600080fd5b6126bb8882890161238a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156103c3576103c3612731565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126127d657600080fd5b9190910192915050565b6000602082840312156127f257600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261282e57600080fd5b83018035915067ffffffffffffffff82111561284957600080fd5b60200191503681900382131561249157600080fd5b8183823760009101908152919050565b60005b83811015612889578181015183820152602001612871565b50506000910152565b60208152600082518060208401526128b181604085016020870161286e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000602082840312156128f557600080fd5b815167ffffffffffffffff81111561290c57600080fd5b8201601f8101841361291d57600080fd5b805161292b6123a982612344565b81815285602083850101111561294057600080fd5b61295182602083016020860161286e565b95945050505050565b60006020828403121561296c57600080fd5b81518015158114611ce957600080fd5b808201808211156103c3576103c3612731565b600082516127d681846020870161286e56fea26469706673582212204eb08ca0c85d8f40a3f3def1af7b0c96fe99e2fa2995146a0174e93c4cf21f0664736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_erc20Proxy";
            readonly type: "address";
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
        readonly name: "InvalidContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
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
        readonly name: "NoSwapFromZeroBalance";
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
        readonly name: "NullAddrIsNotAValidSpender";
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
        readonly name: "SliceOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOverflow";
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
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly name: "ERC20ProxySet";
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
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiGenericSwapCompleted";
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
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiSwappedGeneric";
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
        readonly name: "erc20Proxy";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Proxy";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155BatchReceived";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC721Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
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
            readonly name: "_erc20Proxy";
            readonly type: "address";
        }];
        readonly name: "setERC20Proxy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
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
            readonly name: "_transferredAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "_receiver";
            readonly type: "address";
        }];
        readonly name: "swapAndCompleteBridgeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
            readonly name: "_transferredAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "swapAndExecute";
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
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): ExecutorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Executor;
}
export {};
