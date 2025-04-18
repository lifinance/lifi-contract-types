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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b50604051620029ff380380620029ff833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a051612931620000ce60003960006106b401526000818161083001526108a901526129316000f3fe6080604052600436106100295760003560e01c80633cc9517b1461002e578063c9851d0b14610043575b600080fd5b61004161003c36600461233a565b610056565b005b6100416100513660046123e6565b6102ac565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612464565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610248604089013560208a0135612477565b61025390893561248e565b905061026b8b600001518c60c001518c8c33866104f3565b60c08c015261027b8b8983610693565b5047925050508181111561029e5761029e6000846102998585612464565b6109f6565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610327576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103383447612464565b90508480610100015115610378576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156103b6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866103d98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610410576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361044e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361048b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061049f604089013560208a0135612477565b6104aa90893561248e565b90506104be89608001518a60c00151610a2c565b6104c9898983610693565b504792505050818111156104e7576104e76000846102998585612464565b50506000909155505050565b60008380820361052f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000868661053e600185612464565b81811061054d5761054d6124a1565b905060200281019061055f91906124d0565b61057090608081019060600161250e565b9050600061057d82610ba2565b905073ffffffffffffffffffffffffffffffffffffffff82166105a7576105a43482612464565b90505b60006105b38989610c5b565b90506105bf8989610d67565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526105fa818b8b85610dd4565b60008361060686610ba2565b6106109190612464565b905073ffffffffffffffffffffffffffffffffffffffff851661063a576106378882612464565b90505b8b811015610683576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b608083015173ffffffffffffffffffffffffffffffffffffffff166107e1577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636e6e8a6a828560c001516106fe919061248e565b60a086015160c08701516040805160e086901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff90931660048401819052602484019290925287356044840152606483018290526084830191909152602087013560a483015286013560c482015261010060e482015260006101048201526101240160206040518083038185885af11580156107b6573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906107db9190612532565b506109ba565b60808301516040517fbda009fe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301526108a792917f00000000000000000000000000000000000000000000000000000000000000009091169063bda009fe90602401602060405180830381865afa158015610879573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089d919061254b565b8560c001516111c5565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d2ce7d658285608001518660a001518760c0015187602001358860400135896000013560405160200161092391815260406020820181905260009082015260600190565b6040516020818303038152906040526040518863ffffffff1660e01b8152600401610953969594939291906125d6565b60006040518083038185885af1158015610971573d6000803e3d6000fd5b50505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109b8919081019061262d565b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516109e9919061269b565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a2257610a1d8383836112fc565b505050565b610a1d828261147e565b80600003610a66576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610abf5780341015610abb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610b2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b509190612532565b905081811015610b96576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161067a565b610a1d833330856115a8565b600073ffffffffffffffffffffffffffffffffffffffff821615610c53576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610c2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4e9190612532565b610c55565b475b92915050565b60608160008167ffffffffffffffff811115610c7957610c796120ab565b604051908082528060200260200182016040528015610ca2578160200160208202803683370190505b5090506000805b83811015610d5c57868682818110610cc357610cc36124a1565b9050602002810190610cd591906124d0565b610ce690608081019060600161250e565b9150610cf182610ba2565b838281518110610d0357610d036124a1565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d545734838281518110610d3c57610d3c6124a1565b60200260200101818151610d509190612464565b9052505b600101610ca9565b509095945050505050565b60005b81811015610a1d5736838383818110610d8557610d856124a1565b9050602002810190610d9791906124d0565b9050610da960e0820160c083016127ae565b15610dcb57610dcb610dc1606083016040840161250e565b8260800135610a2c565b50600101610d6a565b6020840151604085015184918491849083600181146110de5760008686610dfc600185612464565b818110610e0b57610e0b6124a1565b9050602002810190610e1d91906124d0565b610e2e90608081019060600161250e565b9050600089815b81811015610fdb57368d8d83818110610e5057610e506124a1565b9050602002810190610e6291906124d0565b9050610e91610e77606083016040840161250e565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610ef45750610ef4610eaa604083016020840161250e565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610f0b5750610f0b610eaa602083018361250e565b8015610f905750610f90610f2260a08301836127cb565b610f3191600491600091612837565b610f3a91612861565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610fc6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610fd290826117c2565b50600101610e35565b505060005b610feb600185612464565b8110156110d6576000898983818110611006576110066124a1565b905060200281019061101891906124d0565b61102990608081019060600161250e565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110cd57868281518110611070576110706124a1565b602002602001015161108182610ba2565b61108b9190612464565b9250600073ffffffffffffffffffffffffffffffffffffffff8216156110b25760006110b4565b865b905083156110cb576110cb828a6102998488612464565b505b50600101610fe0565b5050506111b9565b8760005b818110156111b657368b8b838181106110fd576110fd6124a1565b905060200281019061110f91906124d0565b9050611124610e77606083016040840161250e565b8061113d575061113d610eaa604083016020840161250e565b80156111545750611154610eaa602083018361250e565b801561116b575061116b610f2260a08301836127cb565b6111a1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516111ad90826117c2565b506001016110e2565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166111e557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611232576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156112a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cb9190612532565b1015610a1d57610a1d83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611aa0565b73ffffffffffffffffffffffffffffffffffffffff8316611349576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611396576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611403573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114279190612532565b90508082111561146d576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161067a565b611478848484611c0e565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166114cb576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561150e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161067a565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611568576040519150601f19603f3d011682016040523d82523d6000602084013e61156d565b606091505b5050905080610a1d576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166115f5576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611642576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156116b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d79190612532565b90506116e582868686611c64565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611755573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117799190612532565b6117839190612464565b146117ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6117d86117d2602083018361250e565b3b151590565b61180e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361184e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611863610e77606085016040860161250e565b61186e576000611874565b82608001355b9050600061189061188b606086016040870161250e565b610ba2565b905060006118a761188b608087016060880161250e565b9050826000036118de576118de6118c4606087016040880161250e565b6118d4604088016020890161250e565b87608001356111c5565b8460800135821015611929576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161067a565b600080611939602088018861250e565b73ffffffffffffffffffffffffffffffffffffffff168561195d60a08a018a6127cb565b60405161196b9291906128a9565b60006040518083038185875af1925050503d80600081146119a8576040519150601f19603f3d011682016040523d82523d6000602084013e6119ad565b606091505b5091509150816119c0576119c081611cc2565b60006119d561188b60808a0160608b0161250e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a0660208b018b61250e565b611a1660608c0160408d0161250e565b611a2660808d0160608e0161250e565b8c60800135898711611a385786611a42565b611a428a88612464565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611b2c8482611ccc565b6114785760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611c049085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d8d565b6114788482611d8d565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a1d9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611b82565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526114789085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611b82565b8051602082018181fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611cf691906128b9565b6000604051808303816000865af19150503d8060008114611d33576040519150601f19603f3d011682016040523d82523d6000602084013e611d38565b606091505b5091509150818015611d62575080511580611d62575080806020019051810190611d6291906128cb565b8015611d84575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b6000611def826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e9c9092919063ffffffff16565b9050805160001480611e10575080806020019051810190611e1091906128cb565b610a1d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161067a565b6060611eab8484600085611eb3565b949350505050565b606082471015611f45576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161067a565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f6e91906128b9565b60006040518083038185875af1925050503d8060008114611fab576040519150601f19603f3d011682016040523d82523d6000602084013e611fb0565b606091505b5091509150611fc187838387611fcc565b979650505050505050565b6060831561206257825160000361205b5773ffffffffffffffffffffffffffffffffffffffff85163b61205b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161067a565b5081611eab565b611eab83838151156120775781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a91906128e8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120fe576120fe6120ab565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561214b5761214b6120ab565b604052919050565b600067ffffffffffffffff82111561216d5761216d6120ab565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126121aa57600080fd5b81356121bd6121b882612153565b612104565b8181528460208386010111156121d257600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461221157600080fd5b50565b803561221f816121ef565b919050565b801515811461221157600080fd5b803561221f81612224565b6000610140828403121561225057600080fd5b6122586120da565b905081358152602082013567ffffffffffffffff8082111561227957600080fd5b61228585838601612199565b6020840152604084013591508082111561229e57600080fd5b506122ab84828501612199565b6040830152506122bd60608301612214565b60608201526122ce60808301612214565b60808201526122df60a08301612214565b60a082015260c082013560c082015260e082013560e0820152610100612306818401612232565b90820152610120612318838201612232565b9082015292915050565b60006060828403121561233457600080fd5b50919050565b60008060008060a0858703121561235057600080fd5b843567ffffffffffffffff8082111561236857600080fd5b6123748883890161223d565b9550602087013591508082111561238a57600080fd5b818701915087601f83011261239e57600080fd5b8135818111156123ad57600080fd5b8860208260051b85010111156123c257600080fd5b6020830195508094505050506123db8660408701612322565b905092959194509250565b600080608083850312156123f957600080fd5b823567ffffffffffffffff81111561241057600080fd5b61241c8582860161223d565b92505061242c8460208501612322565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610c5557610c55612435565b8082028115828204841417610c5557610c55612435565b80820180821115610c5557610c55612435565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261250457600080fd5b9190910192915050565b60006020828403121561252057600080fd5b813561252b816121ef565b9392505050565b60006020828403121561254457600080fd5b5051919050565b60006020828403121561255d57600080fd5b815161252b816121ef565b60005b8381101561258357818101518382015260200161256b565b50506000910152565b600081518084526125a4816020860160208601612568565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015284606083015283608083015260c060a083015261262160c083018461258c565b98975050505050505050565b60006020828403121561263f57600080fd5b815167ffffffffffffffff81111561265657600080fd5b8201601f8101841361266757600080fd5b80516126756121b882612153565b81815285602083850101111561268a57600080fd5b611d84826020830160208601612568565b6020815281516020820152600060208301516101408060408501526126c461016085018361258c565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526126ff838261258c565b9250506060850151612729608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061279c8187018315159052565b90950151151593019290925250919050565b6000602082840312156127c057600080fd5b813561252b81612224565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261280057600080fd5b83018035915067ffffffffffffffff82111561281b57600080fd5b60200191503681900382131561283057600080fd5b9250929050565b6000808585111561284757600080fd5b8386111561285457600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128a15780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60008251612504818460208701612568565b6000602082840312156128dd57600080fd5b815161252b81612224565b60208152600061252b602083018461258c56fea2646970667358221220035d220600dcb50c628787bf398bdf67b04b9853d833ad9369628265fe2c75ce64736f6c63430008110033";
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
