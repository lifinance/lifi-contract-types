import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ThorSwapFacet, ThorSwapFacetInterface } from "../ThorSwapFacet";
declare type ThorSwapFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ThorSwapFacet__factory extends ContractFactory {
    constructor(...args: ThorSwapFacetConstructorParams);
    deploy(_thorchainRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ThorSwapFacet>;
    getDeployTransaction(_thorchainRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ThorSwapFacet;
    connect(signer: Signer): ThorSwapFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200293238038062002932833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516128976200009b600039600081816106e6015261071101526128976000f3fe6080604052600436106100295760003560e01c80632541ec571461002e578063ad673d8814610043575b600080fd5b61004161003c36600461227d565b610056565b005b6100416100513660046122e1565b6102c8565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476123cf565b9050846101078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361017c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610235576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024142610e106123e2565b8760400135101561027e576040517ffb2a675200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61029088608001518960c0015161053e565b61029a88886106be565b5047915050818111156102bc576102bc6000846102b785856123cf565b610816565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610343576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061035434476123cf565b905086806101000151610393576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103d1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103f48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561042b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610469576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104a6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104b242610e106123e2565b876040013510156104ef576040517ffb2a675200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105048a600001518b60c001518b8b33610847565b60c08b01526105138a886106be565b504791505081811115610530576105306000846102b785856123cf565b505060009091555050505050565b80600003610578576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105d157803410156105cd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561063e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066291906123f5565b9050818110156106ad576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6106b98333308561098a565b505050565b608082015173ffffffffffffffffffffffffffffffffffffffff8116158061070f5761070f827f00000000000000000000000000000000000000000000000000000000000000008660c00151610ba4565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166344bc937b8261075757600061075d565b8560c001515b61076a602087018761240e565b608088015160c089015161078160208a018a612429565b8a604001356040518863ffffffff1660e01b81526004016107a796959493929190612495565b6000604051808303818588803b1580156107c057600080fd5b505af11580156107d4573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516108089190612589565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83161561083d576106b9838383610ce7565b6106b98282610e69565b600082808203610883576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856108926001856123cf565b8181106108a1576108a161269c565b90506020028101906108b391906126cb565b6108c490608081019060600161240e565b905060006108d182610f93565b905073ffffffffffffffffffffffffffffffffffffffff82166108fb576108f834826123cf565b90505b6000610907888861104c565b90506109138888611158565b6109208a898989856111c5565b60008261092c85610f93565b61093691906123cf565b90508981101561097c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016106a4565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109d7576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a24576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab991906123f5565b9050610ac782868686611577565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5b91906123f5565b610b6591906123cf565b14610b9c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bc457505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c11576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c86573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610caa91906123f5565b10156106b957610cbc83836000611653565b6106b983837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611653565b73ffffffffffffffffffffffffffffffffffffffff8316610d34576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d81576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610dee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1291906123f5565b905080821115610e58576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106a4565b610e638484846117d5565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610eb6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610ef9576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016106a4565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f53576040519150601f19603f3d011682016040523d82523d6000602084013e610f58565b606091505b50509050806106b9576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611044576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561101b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103f91906123f5565b611046565b475b92915050565b60608160008167ffffffffffffffff81111561106a5761106a611ff7565b604051908082528060200260200182016040528015611093578160200160208202803683370190505b5090506000805b8381101561114d578686828181106110b4576110b461269c565b90506020028101906110c691906126cb565b6110d790608081019060600161240e565b91506110e282610f93565b8382815181106110f4576110f461269c565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611145573483828151811061112d5761112d61269c565b6020026020010181815161114191906123cf565b9052505b60010161109a565b509095945050505050565b60005b818110156106b957368383838181106111765761117661269c565b905060200281019061118891906126cb565b905061119a60e0820160c08301612709565b156111bc576111bc6111b2606083016040840161240e565b826080013561053e565b5060010161115b565b83838383826001811461149257600085856111e16001856123cf565b8181106111f0576111f061269c565b905060200281019061120291906126cb565b61121390608081019060600161240e565b9050600089815b818110156113be57368d8d838181106112355761123561269c565b905060200281019061124791906126cb565b905061127661125c606083016040840161240e565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112d957506112d961128f604083016020840161240e565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112f057506112f061128f602083018361240e565b8015611375575061137561130760a0830183612429565b61131691600491600091612726565b61131f91612750565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6113ab576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113b58f8261182b565b5060010161121a565b505060005b6113ce6001856123cf565b81101561148a5760008888838181106113e9576113e961269c565b90506020028101906113fb91906126cb565b61140c90608081019060600161240e565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611481578582815181106114535761145361269c565b602002602001015161146482610f93565b61146e91906123cf565b9250821561148157611481818885610816565b506001016113c3565b50505061156b565b8760005b8181101561156857368b8b838181106114b1576114b161269c565b90506020028101906114c391906126cb565b90506114d861125c606083016040840161240e565b806114f157506114f161128f604083016020840161240e565b8015611508575061150861128f602083018361240e565b801561151f575061151f61130760a0830183612429565b611555576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61155f8d8261182b565b50600101611496565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610e639085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b41565b8015806116f357506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156116cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116f191906123f5565b155b61177f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016106a4565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106b99084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115d1565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106b99084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115d1565b61184161183b602083018361240e565b3b151590565b611877576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036118b7576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118cc61125c606085016040860161240e565b6118d75760006118dd565b82608001355b905060006118f96118f4606086016040870161240e565b610f93565b905060006119106118f4608087016060880161240e565b9050826000036119475761194761192d606087016040880161240e565b61193d604088016020890161240e565b8760800135610ba4565b8460800135821015611992576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016106a4565b6000806119a2602088018861240e565b73ffffffffffffffffffffffffffffffffffffffff16856119c660a08a018a612429565b6040516119d4929190612798565b60006040518083038185875af1925050503d8060008114611a11576040519150601f19603f3d011682016040523d82523d6000602084013e611a16565b606091505b509150915081611a61576000611a2b82611c50565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a491906127a8565b6000611a766118f460808a0160608b0161240e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611aa760208b018b61240e565b611ab760608c0160408d0161240e565b611ac760808d0160608e0161240e565b8c60800135898711611ad95786611ae3565b611ae38a886123cf565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611ba3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cce9092919063ffffffff16565b9050805160001480611bc4575080806020019051810190611bc491906127bb565b6106b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106a4565b6060604482511015611c9557505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611cb16004808551611ca991906123cf565b859190611ce5565b905080806020019051810190611cc791906127d8565b9392505050565b6060611cdd8484600085611dff565b949350505050565b606081611cf381601f6123e2565b1015611d2b576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d3582846123e2565b84511015611d6f576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611d8e5760405191506000825260208201604052611df6565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611dc7578051835260209283019201611daf565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611e91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106a4565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611eba919061284f565b60006040518083038185875af1925050503d8060008114611ef7576040519150601f19603f3d011682016040523d82523d6000602084013e611efc565b606091505b5091509150611f0d87838387611f18565b979650505050505050565b60608315611fae578251600003611fa75773ffffffffffffffffffffffffffffffffffffffff85163b611fa7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106a4565b5081611cdd565b611cdd8383815115611fc35781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a491906127a8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561204a5761204a611ff7565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561209757612097611ff7565b604052919050565b600067ffffffffffffffff8211156120b9576120b9611ff7565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126120f657600080fd5b81356121096121048261209f565b612050565b81815284602083860101111561211e57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461215f57600080fd5b919050565b801515811461217257600080fd5b50565b803561215f81612164565b6000610140828403121561219357600080fd5b61219b612026565b905081358152602082013567ffffffffffffffff808211156121bc57600080fd5b6121c8858386016120e5565b602084015260408401359150808211156121e157600080fd5b506121ee848285016120e5565b6040830152506122006060830161213b565b60608201526122116080830161213b565b608082015261222260a0830161213b565b60a082015260c082013560c082015260e082013560e0820152610100612249818401612175565b9082015261012061225b838201612175565b9082015292915050565b60006060828403121561227757600080fd5b50919050565b6000806040838503121561229057600080fd5b823567ffffffffffffffff808211156122a857600080fd5b6122b486838701612180565b935060208501359150808211156122ca57600080fd5b506122d785828601612265565b9150509250929050565b600080600080606085870312156122f757600080fd5b843567ffffffffffffffff8082111561230f57600080fd5b61231b88838901612180565b9550602087013591508082111561233157600080fd5b818701915087601f83011261234557600080fd5b81358181111561235457600080fd5b8860208260051b850101111561236957600080fd5b60208301955080945050604087013591508082111561238757600080fd5b5061239487828801612265565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115611046576110466123a0565b80820180821115611046576110466123a0565b60006020828403121561240757600080fd5b5051919050565b60006020828403121561242057600080fd5b611cc78261213b565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261245e57600080fd5b83018035915067ffffffffffffffff82111561247957600080fd5b60200191503681900382131561248e57600080fd5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015260a060608301528360a0830152838560c0840137600060c0858401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601168301019050826080830152979650505050505050565b60005b8381101561253657818101518382015260200161251e565b50506000910152565b6000815180845261255781602086016020860161251b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526125b261016085018361253f565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526125ed838261253f565b9250506060850151612617608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061268a8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126126ff57600080fd5b9190910192915050565b60006020828403121561271b57600080fd5b8135611cc781612164565b6000808585111561273657600080fd5b8386111561274357600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127905780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611cc7602083018461253f565b6000602082840312156127cd57600080fd5b8151611cc781612164565b6000602082840312156127ea57600080fd5b815167ffffffffffffffff81111561280157600080fd5b8201601f8101841361281257600080fd5b80516128206121048261209f565b81815285602083850101111561283557600080fd5b61284682602083016020860161251b565b95945050505050565b600082516126ff81846020870161251b56fea26469706673582212206f3d7ca7edbc47169db334dc66d0aae149d8904c7b2a702cfea77bfce03595c164736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_thorchainRouter";
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
        readonly name: "InvalidExpiration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidReceiver";
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
                readonly internalType: "address";
                readonly name: "vault";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "memo";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "expiration";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ThorSwapFacet.ThorSwapData";
            readonly name: "_thorSwapData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaThorSwap";
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
                readonly internalType: "address";
                readonly name: "vault";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "memo";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "expiration";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ThorSwapFacet.ThorSwapData";
            readonly name: "_thorSwapData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndStartBridgeTokensViaThorSwap";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): ThorSwapFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ThorSwapFacet;
}
export {};
