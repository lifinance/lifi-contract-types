import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AmarokFacet, AmarokFacetInterface } from "../AmarokFacet";
declare type AmarokFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AmarokFacet__factory extends ContractFactory {
    constructor(...args: AmarokFacetConstructorParams);
    deploy(_connextHandler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AmarokFacet>;
    getDeployTransaction(_connextHandler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AmarokFacet;
    connect(signer: Signer): AmarokFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620029aa380380620029aa833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b60805161290f6200009b600039600081816106f50152610735015261290f6000f3fe6080604052600436106100295760003560e01c80637d1de3dc1461002e5780639901fdc414610043575b600080fd5b61004161003c366004612036565b610056565b005b610041610051366004612311565b6102c8565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476123ff565b90506100ed85612412565b8061010001511561012a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61013386612412565b60a081015173ffffffffffffffffffffffffffffffffffffffff16610184576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101c2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101ff576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61020887612412565b608081015173ffffffffffffffffffffffffffffffffffffffff16610259576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61026b61026589612412565b8861051b565b61028861027e60a08a0160808b0161241e565b8960c0013561056f565b61029a61029489612412565b886106eb565b5047915050818111156102bc576102bc6000846102b785856123ff565b610840565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610343576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061035434476123ff565b905086806101000151610393576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103b68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103ed576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361042b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610468576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861048b816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156104c2576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104cc8a8861051b565b6104e18a600001518b60c001518b8b33610871565b60c08b01526104f08a886106eb565b50479150508181111561050d5761050d6000846102b785856123ff565b505060009091555050505050565b6101208201511515600061052f8380612439565b90501115151461056b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b806000036105a9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105fe578034101561056b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561066b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068f91906124a5565b9050818110156106da576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6106e6833330856109b4565b505050565b61071e82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610bce565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016638aac16ba602083013561076f60a08501608086016124be565b60a08601516080808801519061078a9088016060890161241e565b60c0890151604089013561079e8a80612439565b6040518a63ffffffff1660e01b81526004016107c19897969594939291906124e4565b60206040518083038185885af11580156107df573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061080491906124a5565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161083491906125ee565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610867576106e6838383610d11565b6106e68282610e93565b6000828082036108ad576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856108bc6001856123ff565b8181106108cb576108cb612701565b90506020028101906108dd9190612730565b6108ee90608081019060600161241e565b905060006108fb82610fbd565b905073ffffffffffffffffffffffffffffffffffffffff82166109255761092234826123ff565b90505b60006109318888611076565b905061093d8888611182565b61094a8a898989856111ef565b60008261095685610fbd565b61096091906123ff565b9050898110156109a6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016106d1565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610a01576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a4e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610abf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae391906124a5565b9050610af1828686866115a1565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8591906124a5565b610b8f91906123ff565b14610bc6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bee57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c3b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610cb0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd491906124a5565b10156106e657610ce68383600061167d565b6106e683837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61167d565b73ffffffffffffffffffffffffffffffffffffffff8316610d5e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610dab576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610e18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3c91906124a5565b905080821115610e82576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106d1565b610e8d8484846117ff565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610ee0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610f23576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016106d1565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f7d576040519150601f19603f3d011682016040523d82523d6000602084013e610f82565b606091505b50509050806106e6576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82161561106e576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611045573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106991906124a5565b611070565b475b92915050565b60608160008167ffffffffffffffff811115611094576110946120a3565b6040519080825280602002602001820160405280156110bd578160200160208202803683370190505b5090506000805b83811015611177578686828181106110de576110de612701565b90506020028101906110f09190612730565b61110190608081019060600161241e565b915061110c82610fbd565b83828151811061111e5761111e612701565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661116f573483828151811061115757611157612701565b6020026020010181815161116b91906123ff565b9052505b6001016110c4565b509095945050505050565b60005b818110156106e657368383838181106111a0576111a0612701565b90506020028101906111b29190612730565b90506111c460e0820160c0830161276e565b156111e6576111e66111dc606083016040840161241e565b826080013561056f565b50600101611185565b8383838382600181146114bc576000858561120b6001856123ff565b81811061121a5761121a612701565b905060200281019061122c9190612730565b61123d90608081019060600161241e565b9050600089815b818110156113e857368d8d8381811061125f5761125f612701565b90506020028101906112719190612730565b90506112a0611286606083016040840161241e565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061130357506113036112b9604083016020840161241e565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561131a575061131a6112b9602083018361241e565b801561139f575061139f61133160a0830183612439565b6113409160049160009161278b565b611349916127b5565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6113d5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113df8f82611855565b50600101611244565b505060005b6113f86001856123ff565b8110156114b457600088888381811061141357611413612701565b90506020028101906114259190612730565b61143690608081019060600161241e565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114ab5785828151811061147d5761147d612701565b602002602001015161148e82610fbd565b61149891906123ff565b925082156114ab576114ab818885610840565b506001016113ed565b505050611595565b8760005b8181101561159257368b8b838181106114db576114db612701565b90506020028101906114ed9190612730565b9050611502611286606083016040840161241e565b8061151b575061151b6112b9604083016020840161241e565b801561153257506115326112b9602083018361241e565b8015611549575061154961133160a0830183612439565b61157f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115898d82611855565b506001016114c0565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610e8d9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b6b565b80158061171d57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156116f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061171b91906124a5565b155b6117a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016106d1565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106e69084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115fb565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106e69084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115fb565b61186b611865602083018361241e565b3b151590565b6118a1576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036118e1576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118f6611286606085016040860161241e565b611901576000611907565b82608001355b9050600061192361191e606086016040870161241e565b610fbd565b9050600061193a61191e608087016060880161241e565b90508260000361197157611971611957606087016040880161241e565b611967604088016020890161241e565b8760800135610bce565b84608001358210156119bc576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016106d1565b6000806119cc602088018861241e565b73ffffffffffffffffffffffffffffffffffffffff16856119f060a08a018a612439565b6040516119fe9291906127fd565b60006040518083038185875af1925050503d8060008114611a3b576040519150601f19603f3d011682016040523d82523d6000602084013e611a40565b606091505b509150915081611a8b576000611a5582611c77565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d1919061280d565b6000611aa061191e60808a0160608b0161241e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611ad160208b018b61241e565b611ae160608c0160408d0161241e565b611af160808d0160608e0161241e565b8c60800135898711611b035786611b0d565b611b0d8a886123ff565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611bcd826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cf59092919063ffffffff16565b8051909150156106e65780806020019051810190611beb9190612820565b6106e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106d1565b6060604482511015611cbc57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611cd86004808551611cd091906123ff565b859190611d0c565b905080806020019051810190611cee919061283d565b9392505050565b6060611d048484600085611e26565b949350505050565b606081611d1a81601f6128b4565b1015611d52576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d5c82846128b4565b84511015611d96576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611db55760405191506000825260208201604052611e1d565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611dee578051835260209283019201611dd6565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611eb8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106d1565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ee191906128c7565b60006040518083038185875af1925050503d8060008114611f1e576040519150601f19603f3d011682016040523d82523d6000602084013e611f23565b606091505b5091509150611f3487838387611f3f565b979650505050505050565b60608315611fd5578251600003611fce5773ffffffffffffffffffffffffffffffffffffffff85163b611fce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106d1565b5081611d04565b611d048383815115611fea5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d1919061280d565b600060a0828403121561203057600080fd5b50919050565b6000806040838503121561204957600080fd5b823567ffffffffffffffff8082111561206157600080fd5b90840190610140828703121561207657600080fd5b9092506020840135908082111561208c57600080fd5b506120998582860161201e565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120f6576120f66120a3565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612143576121436120a3565b604052919050565b600067ffffffffffffffff821115612165576121656120a3565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126121a257600080fd5b81356121b56121b08261214b565b6120fc565b8181528460208386010111156121ca57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461220b57600080fd5b919050565b801515811461221e57600080fd5b50565b803561220b81612210565b6000610140828403121561223f57600080fd5b6122476120d2565b905081358152602082013567ffffffffffffffff8082111561226857600080fd5b61227485838601612191565b6020840152604084013591508082111561228d57600080fd5b5061229a84828501612191565b6040830152506122ac606083016121e7565b60608201526122bd608083016121e7565b60808201526122ce60a083016121e7565b60a082015260c082013560c082015260e082013560e08201526101006122f5818401612221565b90820152610120612307838201612221565b9082015292915050565b6000806000806060858703121561232757600080fd5b843567ffffffffffffffff8082111561233f57600080fd5b61234b8883890161222c565b9550602087013591508082111561236157600080fd5b818701915087601f83011261237557600080fd5b81358181111561238457600080fd5b8860208260051b850101111561239957600080fd5b6020830195508094505060408701359150808211156123b757600080fd5b506123c48782880161201e565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115611070576110706123d0565b6000611070368361222c565b60006020828403121561243057600080fd5b611cee826121e7565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261246e57600080fd5b83018035915067ffffffffffffffff82111561248957600080fd5b60200191503681900382131561249e57600080fd5b9250929050565b6000602082840312156124b757600080fd5b5051919050565b6000602082840312156124d057600080fd5b813563ffffffff81168114611cee57600080fd5b63ffffffff89168152600073ffffffffffffffffffffffffffffffffffffffff808a16602084015280891660408401528088166060840152508560808301528460a083015260e060c08301528260e08301526101008385828501376000838501820152601f9093017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910190910198975050505050505050565b60005b8381101561259b578181015183820152602001612583565b50506000910152565b600081518084526125bc816020860160208601612580565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526126176101608501836125a4565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261265283826125a4565b925050606085015161267c608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126ef8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261276457600080fd5b9190910192915050565b60006020828403121561278057600080fd5b8135611cee81612210565b6000808585111561279b57600080fd5b838611156127a857600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127f55780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611cee60208301846125a4565b60006020828403121561283257600080fd5b8151611cee81612210565b60006020828403121561284f57600080fd5b815167ffffffffffffffff81111561286657600080fd5b8201601f8101841361287757600080fd5b80516128856121b08261214b565b81815285602083850101111561289a57600080fd5b6128ab826020830160208601612580565b95945050505050565b80820180821115611070576110706123d0565b6000825161276481846020870161258056fea264697066735822122086ce6e90bc02d8f8f43afedff284a38c66fbab76bf21fd45ff5ab399b46203bc64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IConnextHandler";
            readonly name: "_connextHandler";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotBridgeToSameNetwork";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ContractCallNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "receivedAmount";
            readonly type: "uint256";
        }];
        readonly name: "CumulativeSlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InformationMismatch";
        readonly type: "error";
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
        readonly name: "InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetNotSupported";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapDataProvided";
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "relayerFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "slippageTol";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "delegate";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "destChainDomainId";
                readonly type: "uint32";
            }];
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly name: "_amarokData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaAmarok";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
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
            readonly components: readonly [{
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "relayerFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "slippageTol";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "delegate";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "destChainDomainId";
                readonly type: "uint32";
            }];
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly name: "_amarokData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndStartBridgeTokensViaAmarok";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): AmarokFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AmarokFacet;
}
export {};
