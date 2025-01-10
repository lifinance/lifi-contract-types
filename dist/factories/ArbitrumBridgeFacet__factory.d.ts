import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ArbitrumBridgeFacet, ArbitrumBridgeFacetInterface } from "../ArbitrumBridgeFacet";
declare type ArbitrumBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ArbitrumBridgeFacet__factory extends ContractFactory {
    constructor(...args: ArbitrumBridgeFacetConstructorParams);
    deploy(_gatewayRouter: PromiseOrValue<string>, _inbox: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ArbitrumBridgeFacet>;
    getDeployTransaction(_gatewayRouter: PromiseOrValue<string>, _inbox: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ArbitrumBridgeFacet;
    connect(signer: Signer): ArbitrumBridgeFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b50604051620029e5380380620029e5833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a051612917620000ce60003960006106b401526000818161083001526108a901526129176000f3fe6080604052600436106100295760003560e01c80633cc9517b1461002e578063c9851d0b14610043575b600080fd5b61004161003c366004612317565b610056565b005b6100416100513660046123c3565b6102ac565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612441565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610248604089013560208a0135612454565b61025390893561246b565b905061026b8b600001518c60c001518c8c33866104f3565b60c08c015261027b8b8983610693565b5047925050508181111561029e5761029e6000846102998585612441565b6109f6565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610327576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103383447612441565b90508480610100015115610378576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156103b6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866103d98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610410576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361044e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361048b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061049f604089013560208a0135612454565b6104aa90893561246b565b90506104be89608001518a60c00151610a2c565b6104c9898983610693565b504792505050818111156104e7576104e76000846102998585612441565b50506000909155505050565b60008380820361052f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000868661053e600185612441565b81811061054d5761054d61247e565b905060200281019061055f91906124ad565b6105709060808101906060016124eb565b9050600061057d82610ba2565b905073ffffffffffffffffffffffffffffffffffffffff82166105a7576105a43482612441565b90505b60006105b38989610c5b565b90506105bf8989610d67565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526105fa818b8b85610dd4565b60008361060686610ba2565b6106109190612441565b905073ffffffffffffffffffffffffffffffffffffffff851661063a576106378882612441565b90505b8b811015610683576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b608083015173ffffffffffffffffffffffffffffffffffffffff166107e1577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636e6e8a6a828560c001516106fe919061246b565b60a086015160c08701516040805160e086901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff90931660048401819052602484019290925287356044840152606483018290526084830191909152602087013560a483015286013560c482015261010060e482015260006101048201526101240160206040518083038185885af11580156107b6573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906107db919061250f565b506109ba565b60808301516040517fbda009fe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301526108a792917f00000000000000000000000000000000000000000000000000000000000000009091169063bda009fe90602401602060405180830381865afa158015610879573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089d9190612528565b8560c001516111c5565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d2ce7d658285608001518660a001518760c0015187602001358860400135896000013560405160200161092391815260406020820181905260009082015260600190565b6040516020818303038152906040526040518863ffffffff1660e01b8152600401610953969594939291906125b3565b60006040518083038185885af1158015610971573d6000803e3d6000fd5b50505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109b8919081019061260a565b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516109e99190612681565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a2257610a1d838383611308565b505050565b610a1d828261148a565b80600003610a66576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610abf5780341015610abb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610b2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b50919061250f565b905081811015610b96576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161067a565b610a1d833330856115b4565b600073ffffffffffffffffffffffffffffffffffffffff821615610c53576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610c2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4e919061250f565b610c55565b475b92915050565b60608160008167ffffffffffffffff811115610c7957610c79612088565b604051908082528060200260200182016040528015610ca2578160200160208202803683370190505b5090506000805b83811015610d5c57868682818110610cc357610cc361247e565b9050602002810190610cd591906124ad565b610ce69060808101906060016124eb565b9150610cf182610ba2565b838281518110610d0357610d0361247e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d545734838281518110610d3c57610d3c61247e565b60200260200101818151610d509190612441565b9052505b600101610ca9565b509095945050505050565b60005b81811015610a1d5736838383818110610d8557610d8561247e565b9050602002810190610d9791906124ad565b9050610da960e0820160c08301612794565b15610dcb57610dcb610dc160608301604084016124eb565b8260800135610a2c565b50600101610d6a565b6020840151604085015184918491849083600181146110de5760008686610dfc600185612441565b818110610e0b57610e0b61247e565b9050602002810190610e1d91906124ad565b610e2e9060808101906060016124eb565b9050600089815b81811015610fdb57368d8d83818110610e5057610e5061247e565b9050602002810190610e6291906124ad565b9050610e91610e7760608301604084016124eb565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610ef45750610ef4610eaa60408301602084016124eb565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610f0b5750610f0b610eaa60208301836124eb565b8015610f905750610f90610f2260a08301836127b1565b610f319160049160009161281d565b610f3a91612847565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610fc6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610fd290826117ce565b50600101610e35565b505060005b610feb600185612441565b8110156110d65760008989838181106110065761100661247e565b905060200281019061101891906124ad565b6110299060808101906060016124eb565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110cd578682815181106110705761107061247e565b602002602001015161108182610ba2565b61108b9190612441565b9250600073ffffffffffffffffffffffffffffffffffffffff8216156110b25760006110b4565b865b905083156110cb576110cb828a6102998488612441565b505b50600101610fe0565b5050506111b9565b8760005b818110156111b657368b8b838181106110fd576110fd61247e565b905060200281019061110f91906124ad565b9050611124610e7760608301604084016124eb565b8061113d575061113d610eaa60408301602084016124eb565b80156111545750611154610eaa60208301836124eb565b801561116b575061116b610f2260a08301836127b1565b6111a1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516111ad90826117ce565b506001016110e2565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166111e557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611232576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156112a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cb919061250f565b1015610a1d576112dd83836000611aac565b610a1d83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611aac565b73ffffffffffffffffffffffffffffffffffffffff8316611355576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166113a2576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561140f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611433919061250f565b905080821115611479576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161067a565b611484848484611cac565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166114d7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561151a576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161067a565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611574576040519150601f19603f3d011682016040523d82523d6000602084013e611579565b606091505b5050905080610a1d576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611601576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661164e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156116bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e3919061250f565b90506116f182868686611d02565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611761573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611785919061250f565b61178f9190612441565b146117c6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6117e46117de60208301836124eb565b3b151590565b61181a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361185a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061186f610e7760608501604086016124eb565b61187a576000611880565b82608001355b9050600061189c61189760608601604087016124eb565b610ba2565b905060006118b361189760808701606088016124eb565b9050826000036118ea576118ea6118d060608701604088016124eb565b6118e060408801602089016124eb565b87608001356111c5565b8460800135821015611935576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161067a565b60008061194560208801886124eb565b73ffffffffffffffffffffffffffffffffffffffff168561196960a08a018a6127b1565b60405161197792919061288f565b60006040518083038185875af1925050503d80600081146119b4576040519150601f19603f3d011682016040523d82523d6000602084013e6119b9565b606091505b5091509150816119cc576119cc81611d60565b60006119e161189760808a0160608b016124eb565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a1260208b018b6124eb565b611a2260608c0160408d016124eb565b611a3260808d0160608e016124eb565b8c60800135898711611a445786611a4e565b611a4e8a88612441565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611b4c57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611b26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b4a919061250f565b155b611bd8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161067a565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a1d9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d6a565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a1d9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611c2a565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526114849085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611c2a565b8051602082018181fd5b6000611dcc826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e799092919063ffffffff16565b9050805160001480611ded575080806020019051810190611ded919061289f565b610a1d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161067a565b6060611e888484600085611e90565b949350505050565b606082471015611f22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161067a565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f4b91906128bc565b60006040518083038185875af1925050503d8060008114611f88576040519150601f19603f3d011682016040523d82523d6000602084013e611f8d565b606091505b5091509150611f9e87838387611fa9565b979650505050505050565b6060831561203f5782516000036120385773ffffffffffffffffffffffffffffffffffffffff85163b612038576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161067a565b5081611e88565b611e8883838151156120545781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a91906128ce565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120db576120db612088565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561212857612128612088565b604052919050565b600067ffffffffffffffff82111561214a5761214a612088565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261218757600080fd5b813561219a61219582612130565b6120e1565b8181528460208386010111156121af57600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146121ee57600080fd5b50565b80356121fc816121cc565b919050565b80151581146121ee57600080fd5b80356121fc81612201565b6000610140828403121561222d57600080fd5b6122356120b7565b905081358152602082013567ffffffffffffffff8082111561225657600080fd5b61226285838601612176565b6020840152604084013591508082111561227b57600080fd5b5061228884828501612176565b60408301525061229a606083016121f1565b60608201526122ab608083016121f1565b60808201526122bc60a083016121f1565b60a082015260c082013560c082015260e082013560e08201526101006122e381840161220f565b908201526101206122f583820161220f565b9082015292915050565b60006060828403121561231157600080fd5b50919050565b60008060008060a0858703121561232d57600080fd5b843567ffffffffffffffff8082111561234557600080fd5b6123518883890161221a565b9550602087013591508082111561236757600080fd5b818701915087601f83011261237b57600080fd5b81358181111561238a57600080fd5b8860208260051b850101111561239f57600080fd5b6020830195508094505050506123b886604087016122ff565b905092959194509250565b600080608083850312156123d657600080fd5b823567ffffffffffffffff8111156123ed57600080fd5b6123f98582860161221a565b92505061240984602085016122ff565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610c5557610c55612412565b8082028115828204841417610c5557610c55612412565b80820180821115610c5557610c55612412565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126124e157600080fd5b9190910192915050565b6000602082840312156124fd57600080fd5b8135612508816121cc565b9392505050565b60006020828403121561252157600080fd5b5051919050565b60006020828403121561253a57600080fd5b8151612508816121cc565b60005b83811015612560578181015183820152602001612548565b50506000910152565b60008151808452612581816020860160208601612545565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015284606083015283608083015260c060a08301526125fe60c0830184612569565b98975050505050505050565b60006020828403121561261c57600080fd5b815167ffffffffffffffff81111561263357600080fd5b8201601f8101841361264457600080fd5b805161265261219582612130565b81815285602083850101111561266757600080fd5b612678826020830160208601612545565b95945050505050565b6020815281516020820152600060208301516101408060408501526126aa610160850183612569565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526126e58382612569565b925050606085015161270f608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127828187018315159052565b90950151151593019290925250919050565b6000602082840312156127a657600080fd5b813561250881612201565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126127e657600080fd5b83018035915067ffffffffffffffff82111561280157600080fd5b60200191503681900382131561281657600080fd5b9250929050565b6000808585111561282d57600080fd5b8386111561283a57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128875780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156128b157600080fd5b815161250881612201565b600082516124e1818460208701612545565b602081526000612508602083018461256956fea2646970667358221220a05359a365b59d483b6e21df89724a09036b19d18f970cbe5571f103d4ee5e2464736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gatewayRouter";
            readonly type: "address";
            readonly internalType: "contract IGatewayRouter";
        }, {
            readonly name: "_inbox";
            readonly type: "address";
            readonly internalType: "contract IGatewayRouter";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaArbitrumBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
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
        }, {
            readonly name: "_arbitrumData";
            readonly type: "tuple";
            readonly internalType: "struct ArbitrumBridgeFacet.ArbitrumData";
            readonly components: readonly [{
                readonly name: "maxSubmissionCost";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGasPrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaArbitrumBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
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
            readonly name: "_arbitrumData";
            readonly type: "tuple";
            readonly internalType: "struct ArbitrumBridgeFacet.ArbitrumData";
            readonly components: readonly [{
                readonly name: "maxSubmissionCost";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGasPrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
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
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
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
    }];
    static createInterface(): ArbitrumBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ArbitrumBridgeFacet;
}
export {};
