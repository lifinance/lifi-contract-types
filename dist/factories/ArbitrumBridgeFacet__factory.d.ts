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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002ba638038062002ba6833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a051612ad8620000ce60003960006106b401526000818161083001526108a90152612ad86000f3fe6080604052600436106100295760003560e01c80633cc9517b1461002e578063c9851d0b14610043575b600080fd5b61004161003c3660046124dd565b610056565b005b610041610051366004612589565b6102ac565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612607565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610248604089013560208a013561261a565b610253908935612631565b905061026b8b600001518c60c001518c8c33866104f3565b60c08c015261027b8b8983610693565b5047925050508181111561029e5761029e6000846102998585612607565b6109f6565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610327576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103383447612607565b90508480610100015115610378576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156103b6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866103d98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610410576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361044e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361048b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061049f604089013560208a013561261a565b6104aa908935612631565b90506104be89608001518a60c00151610a2c565b6104c9898983610693565b504792505050818111156104e7576104e76000846102998585612607565b50506000909155505050565b60008380820361052f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000868661053e600185612607565b81811061054d5761054d612644565b905060200281019061055f9190612673565b6105709060808101906060016126b1565b9050600061057d82610ba2565b905073ffffffffffffffffffffffffffffffffffffffff82166105a7576105a43482612607565b90505b60006105b38989610c5b565b90506105bf8989610d67565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526105fa818b8b85610dd4565b60008361060686610ba2565b6106109190612607565b905073ffffffffffffffffffffffffffffffffffffffff851661063a576106378882612607565b90505b8b811015610683576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b608083015173ffffffffffffffffffffffffffffffffffffffff166107e1577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636e6e8a6a828560c001516106fe9190612631565b60a086015160c08701516040805160e086901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff90931660048401819052602484019290925287356044840152606483018290526084830191909152602087013560a483015286013560c482015261010060e482015260006101048201526101240160206040518083038185885af11580156107b6573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906107db91906126ce565b506109ba565b60808301516040517fbda009fe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301526108a792917f00000000000000000000000000000000000000000000000000000000000000009091169063bda009fe90602401602060405180830381865afa158015610879573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089d91906126e7565b8560c001516111c5565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d2ce7d658285608001518660a001518760c0015187602001358860400135896000013560405160200161092391815260406020820181905260009082015260600190565b6040516020818303038152906040526040518863ffffffff1660e01b815260040161095396959493929190612772565b60006040518083038185885af1158015610971573d6000803e3d6000fd5b50505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109b891908101906127f9565b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516109e99190612842565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a2257610a1d838383611308565b505050565b610a1d828261148a565b80600003610a66576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610abf5780341015610abb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610b2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5091906126ce565b905081811015610b96576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161067a565b610a1d833330856115b4565b600073ffffffffffffffffffffffffffffffffffffffff821615610c53576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610c2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4e91906126ce565b610c55565b475b92915050565b60608160008167ffffffffffffffff811115610c7957610c7961224e565b604051908082528060200260200182016040528015610ca2578160200160208202803683370190505b5090506000805b83811015610d5c57868682818110610cc357610cc3612644565b9050602002810190610cd59190612673565b610ce69060808101906060016126b1565b9150610cf182610ba2565b838281518110610d0357610d03612644565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d545734838281518110610d3c57610d3c612644565b60200260200101818151610d509190612607565b9052505b600101610ca9565b509095945050505050565b60005b81811015610a1d5736838383818110610d8557610d85612644565b9050602002810190610d979190612673565b9050610da960e0820160c08301612955565b15610dcb57610dcb610dc160608301604084016126b1565b8260800135610a2c565b50600101610d6a565b6020840151604085015184918491849083600181146110de5760008686610dfc600185612607565b818110610e0b57610e0b612644565b9050602002810190610e1d9190612673565b610e2e9060808101906060016126b1565b9050600089815b81811015610fdb57368d8d83818110610e5057610e50612644565b9050602002810190610e629190612673565b9050610e91610e7760608301604084016126b1565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610ef45750610ef4610eaa60408301602084016126b1565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610f0b5750610f0b610eaa60208301836126b1565b8015610f905750610f90610f2260a0830183612972565b610f31916004916000916129de565b610f3a91612a08565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610fc6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610fd290826117ce565b50600101610e35565b505060005b610feb600185612607565b8110156110d657600089898381811061100657611006612644565b90506020028101906110189190612673565b6110299060808101906060016126b1565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110cd5786828151811061107057611070612644565b602002602001015161108182610ba2565b61108b9190612607565b9250600073ffffffffffffffffffffffffffffffffffffffff8216156110b25760006110b4565b865b905083156110cb576110cb828a6102998488612607565b505b50600101610fe0565b5050506111b9565b8760005b818110156111b657368b8b838181106110fd576110fd612644565b905060200281019061110f9190612673565b9050611124610e7760608301604084016126b1565b8061113d575061113d610eaa60408301602084016126b1565b80156111545750611154610eaa60208301836126b1565b801561116b575061116b610f2260a0830183612972565b6111a1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516111ad90826117ce565b506001016110e2565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166111e557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611232576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156112a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cb91906126ce565b1015610a1d576112dd83836000611ae4565b610a1d83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ae4565b73ffffffffffffffffffffffffffffffffffffffff8316611355576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166113a2576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561140f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143391906126ce565b905080821115611479576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161067a565b611484848484611ce4565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166114d7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561151a576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161067a565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611574576040519150601f19603f3d011682016040523d82523d6000602084013e611579565b606091505b5050905080610a1d576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611601576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661164e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156116bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e391906126ce565b90506116f182868686611d3a565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611761573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061178591906126ce565b61178f9190612607565b146117c6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6117e46117de60208301836126b1565b3b151590565b61181a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361185a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061186f610e7760608501604086016126b1565b61187a576000611880565b82608001355b9050600061189c61189760608601604087016126b1565b610ba2565b905060006118b361189760808701606088016126b1565b9050826000036118ea576118ea6118d060608701604088016126b1565b6118e060408801602089016126b1565b87608001356111c5565b8460800135821015611935576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161067a565b60008061194560208801886126b1565b73ffffffffffffffffffffffffffffffffffffffff168561196960a08a018a612972565b604051611977929190612a50565b60006040518083038185875af1925050503d80600081146119b4576040519150601f19603f3d011682016040523d82523d6000602084013e6119b9565b606091505b509150915081611a045760006119ce82611d98565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a9190612a60565b6000611a1961189760808a0160608b016126b1565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a4a60208b018b6126b1565b611a5a60608c0160408d016126b1565b611a6a60808d0160608e016126b1565b8c60800135898711611a7c5786611a86565b611a868a88612607565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611b8457506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611b5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b8291906126ce565b155b611c10576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161067a565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a1d9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611e16565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a1d9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611c62565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526114849085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611c62565b6060604482511015611ddd57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611df96004808551611df19190612607565b859190611f25565b905080806020019051810190611e0f91906127f9565b9392505050565b6000611e78826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661203f9092919063ffffffff16565b9050805160001480611e99575080806020019051810190611e999190612a73565b610a1d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161067a565b606081611f3381601f612631565b1015611f6b576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611f758284612631565b84511015611faf576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611fce5760405191506000825260208201604052612036565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015612007578051835260209283019201611fef565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606061204e8484600085612056565b949350505050565b6060824710156120e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161067a565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516121119190612a90565b60006040518083038185875af1925050503d806000811461214e576040519150601f19603f3d011682016040523d82523d6000602084013e612153565b606091505b50915091506121648783838761216f565b979650505050505050565b606083156122055782516000036121fe5773ffffffffffffffffffffffffffffffffffffffff85163b6121fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161067a565b508161204e565b61204e838381511561221a5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a9190612a60565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156122a1576122a161224e565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156122ee576122ee61224e565b604052919050565b600067ffffffffffffffff8211156123105761231061224e565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261234d57600080fd5b813561236061235b826122f6565b6122a7565b81815284602083860101111561237557600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146123b457600080fd5b50565b80356123c281612392565b919050565b80151581146123b457600080fd5b80356123c2816123c7565b600061014082840312156123f357600080fd5b6123fb61227d565b905081358152602082013567ffffffffffffffff8082111561241c57600080fd5b6124288583860161233c565b6020840152604084013591508082111561244157600080fd5b5061244e8482850161233c565b604083015250612460606083016123b7565b6060820152612471608083016123b7565b608082015261248260a083016123b7565b60a082015260c082013560c082015260e082013560e08201526101006124a98184016123d5565b908201526101206124bb8382016123d5565b9082015292915050565b6000606082840312156124d757600080fd5b50919050565b60008060008060a085870312156124f357600080fd5b843567ffffffffffffffff8082111561250b57600080fd5b612517888389016123e0565b9550602087013591508082111561252d57600080fd5b818701915087601f83011261254157600080fd5b81358181111561255057600080fd5b8860208260051b850101111561256557600080fd5b60208301955080945050505061257e86604087016124c5565b905092959194509250565b6000806080838503121561259c57600080fd5b823567ffffffffffffffff8111156125b357600080fd5b6125bf858286016123e0565b9250506125cf84602085016124c5565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610c5557610c556125d8565b8082028115828204841417610c5557610c556125d8565b80820180821115610c5557610c556125d8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126126a757600080fd5b9190910192915050565b6000602082840312156126c357600080fd5b8135611e0f81612392565b6000602082840312156126e057600080fd5b5051919050565b6000602082840312156126f957600080fd5b8151611e0f81612392565b60005b8381101561271f578181015183820152602001612707565b50506000910152565b60008151808452612740816020860160208601612704565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015284606083015283608083015260c060a08301526127bd60c0830184612728565b98975050505050505050565b60006127d761235b846122f6565b90508281528383830111156127eb57600080fd5b611e0f836020830184612704565b60006020828403121561280b57600080fd5b815167ffffffffffffffff81111561282257600080fd5b8201601f8101841361283357600080fd5b61204e848251602084016127c9565b60208152815160208201526000602083015161014080604085015261286b610160850183612728565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526128a68382612728565b92505060608501516128d0608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206129438187018315159052565b90950151151593019290925250919050565b60006020828403121561296757600080fd5b8135611e0f816123c7565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126129a757600080fd5b83018035915067ffffffffffffffff8211156129c257600080fd5b6020019150368190038213156129d757600080fd5b9250929050565b600080858511156129ee57600080fd5b838611156129fb57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612a485780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611e0f6020830184612728565b600060208284031215612a8557600080fd5b8151611e0f816123c7565b600082516126a781846020870161270456fea26469706673582212202307915115028bb7d0b28639f5df0af7b97f7b8a259dccac902756f4792e708364736f6c63430008110033";
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
    }, {
        readonly type: "error";
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): ArbitrumBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ArbitrumBridgeFacet;
}
export {};
