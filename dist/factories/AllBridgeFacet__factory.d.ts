import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AllBridgeFacet, AllBridgeFacetInterface } from "../AllBridgeFacet";
declare type AllBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AllBridgeFacet__factory extends ContractFactory {
    constructor(...args: AllBridgeFacetConstructorParams);
    deploy(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AllBridgeFacet>;
    getDeployTransaction(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AllBridgeFacet;
    connect(signer: Signer): AllBridgeFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200274638038062002746833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516126a4620000a2600039600081816105fe0152818161063e015261074001526126a46000f3fe6080604052600436106100295760003560e01c8063a74ccb351461002e578063e40f246014610043575b600080fd5b61004161003c36600461211b565b610056565b005b6100416100513660046121c8565b610288565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612218565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102498a600001518b60c001518b8b336104ac565b60c08b01526102588a886105f4565b50479150508181111561027a5761027a6000846102758585612218565b61085f565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610303576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103143447612218565b9050846103398160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610370576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103eb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610429576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610467576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047988608001518960c00151610895565b61048388886105f4565b5047915050818111156104a0576104a06000846102758585612218565b50506000909155505050565b6000828082036104e8576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104f7600185612218565b81811061050657610506612252565b90506020028101906105189190612281565b6105299060808101906060016122bf565b9050600061053682610a0b565b905073ffffffffffffffffffffffffffffffffffffffff82166105605761055d3482612218565b90505b600061056c8888610ac4565b90506105788888610bd0565b6105858a89898985610c3d565b60008261059185610a0b565b61059b9190612218565b9050898110156105e6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b61062782608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610fef565b61063760e0820160c083016122e1565b1561073e577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd610699846080015173ffffffffffffffffffffffffffffffffffffffff1690565b8460c0015184602001358560400135866060013587608001358860a00160208101906106c591906122fe565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b16815261070797969594939291908b359060040161235a565b600060405180830381600087803b15801561072157600080fd5b505af1158015610735573d6000803e3d6000fd5b50505050610824565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd82600001356107a0856080015173ffffffffffffffffffffffffffffffffffffffff1690565b8560c0015185602001358660400135876060013588608001358960a00160208101906107cc91906122fe565b60006040518a63ffffffff1660e01b81526004016107f198979695949392919061235a565b6000604051808303818588803b15801561080a57600080fd5b505af115801561081e573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108539190612412565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561088b57610886838383611126565b505050565b61088682826112a8565b806000036108cf576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109285780341015610924576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610995573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b99190612525565b9050818110156109ff576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105dd565b610886833330856113d2565b600073ffffffffffffffffffffffffffffffffffffffff821615610abc576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab79190612525565b610abe565b475b92915050565b60608160008167ffffffffffffffff811115610ae257610ae2611ed5565b604051908082528060200260200182016040528015610b0b578160200160208202803683370190505b5090506000805b83811015610bc557868682818110610b2c57610b2c612252565b9050602002810190610b3e9190612281565b610b4f9060808101906060016122bf565b9150610b5a82610a0b565b838281518110610b6c57610b6c612252565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610bbd5734838281518110610ba557610ba5612252565b60200260200101818151610bb99190612218565b9052505b600101610b12565b509095945050505050565b60005b818110156108865736838383818110610bee57610bee612252565b9050602002810190610c009190612281565b9050610c1260e0820160c083016122e1565b15610c3457610c34610c2a60608301604084016122bf565b8260800135610895565b50600101610bd3565b838383838260018114610f0a5760008585610c59600185612218565b818110610c6857610c68612252565b9050602002810190610c7a9190612281565b610c8b9060808101906060016122bf565b9050600089815b81811015610e3657368d8d83818110610cad57610cad612252565b9050602002810190610cbf9190612281565b9050610cee610cd460608301604084016122bf565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d515750610d51610d0760408301602084016122bf565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d685750610d68610d0760208301836122bf565b8015610ded5750610ded610d7f60a083018361253e565b610d8e916004916000916125aa565b610d97916125d4565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e23576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e2d8f826115ec565b50600101610c92565b505060005b610e46600185612218565b811015610f02576000888883818110610e6157610e61612252565b9050602002810190610e739190612281565b610e849060808101906060016122bf565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ef957858281518110610ecb57610ecb612252565b6020026020010151610edc82610a0b565b610ee69190612218565b92508215610ef957610ef981888561085f565b50600101610e3b565b505050610fe3565b8760005b81811015610fe057368b8b83818110610f2957610f29612252565b9050602002810190610f3b9190612281565b9050610f50610cd460608301604084016122bf565b80610f695750610f69610d0760408301602084016122bf565b8015610f805750610f80610d0760208301836122bf565b8015610f975750610f97610d7f60a083018361253e565b610fcd576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fd78d826115ec565b50600101610f0e565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661100f57505050565b73ffffffffffffffffffffffffffffffffffffffff821661105c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156110d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f59190612525565b10156108865761088683837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118ca565b73ffffffffffffffffffffffffffffffffffffffff8316611173576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111c0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561122d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112519190612525565b905080821115611297576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105dd565b6112a2848484611a38565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166112f5576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611338576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105dd565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611392576040519150601f19603f3d011682016040523d82523d6000602084013e611397565b606091505b5050905080610886576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661141f576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661146c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156114dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115019190612525565b905061150f82868686611a8e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561157f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a39190612525565b6115ad9190612218565b146115e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6116026115fc60208301836122bf565b3b151590565b611638576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611678576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061168d610cd460608501604086016122bf565b61169857600061169e565b82608001355b905060006116ba6116b560608601604087016122bf565b610a0b565b905060006116d16116b560808701606088016122bf565b905082600003611708576117086116ee60608701604088016122bf565b6116fe60408801602089016122bf565b8760800135610fef565b8460800135821015611753576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105dd565b60008061176360208801886122bf565b73ffffffffffffffffffffffffffffffffffffffff168561178760a08a018a61253e565b60405161179592919061261c565b60006040518083038185875af1925050503d80600081146117d2576040519150601f19603f3d011682016040523d82523d6000602084013e6117d7565b606091505b5091509150816117ea576117ea81611aec565b60006117ff6116b560808a0160608b016122bf565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961183060208b018b6122bf565b61184060608c0160408d016122bf565b61185060808d0160608e016122bf565b8c60800135898711611862578661186c565b61186c8a88612218565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526119568482611af6565b6112a25760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611a2e9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611bb7565b6112a28482611bb7565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108869084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016119ac565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112a29085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016119ac565b8051602082018181fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611b20919061262c565b6000604051808303816000865af19150503d8060008114611b5d576040519150601f19603f3d011682016040523d82523d6000602084013e611b62565b606091505b5091509150818015611b8c575080511580611b8c575080806020019051810190611b8c919061263e565b8015611bae575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b6000611c19826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cc69092919063ffffffff16565b9050805160001480611c3a575080806020019051810190611c3a919061263e565b610886576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105dd565b6060611cd58484600085611cdd565b949350505050565b606082471015611d6f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105dd565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d98919061262c565b60006040518083038185875af1925050503d8060008114611dd5576040519150601f19603f3d011682016040523d82523d6000602084013e611dda565b606091505b5091509150611deb87838387611df6565b979650505050505050565b60608315611e8c578251600003611e855773ffffffffffffffffffffffffffffffffffffffff85163b611e85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105dd565b5081611cd5565b611cd58383815115611ea15781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105dd919061265b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f2857611f28611ed5565b60405290565b600082601f830112611f3f57600080fd5b813567ffffffffffffffff80821115611f5a57611f5a611ed5565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611fa057611fa0611ed5565b81604052838152866020858801011115611fb957600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611ffd57600080fd5b919050565b801515811461201057600080fd5b50565b8035611ffd81612002565b6000610140828403121561203157600080fd5b612039611f04565b905081358152602082013567ffffffffffffffff8082111561205a57600080fd5b61206685838601611f2e565b6020840152604084013591508082111561207f57600080fd5b5061208c84828501611f2e565b60408301525061209e60608301611fd9565b60608201526120af60808301611fd9565b60808201526120c060a08301611fd9565b60a082015260c082013560c082015260e082013560e08201526101006120e7818401612013565b908201526101206120f9838201612013565b9082015292915050565b600060e0828403121561211557600080fd5b50919050565b600080600080610120858703121561213257600080fd5b843567ffffffffffffffff8082111561214a57600080fd5b6121568883890161201e565b9550602087013591508082111561216c57600080fd5b818701915087601f83011261218057600080fd5b81358181111561218f57600080fd5b8860208260051b85010111156121a457600080fd5b6020830195508094505050506121bd8660408701612103565b905092959194509250565b60008061010083850312156121dc57600080fd5b823567ffffffffffffffff8111156121f357600080fd5b6121ff8582860161201e565b92505061220f8460208501612103565b90509250929050565b81810381811115610abe577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122b557600080fd5b9190910192915050565b6000602082840312156122d157600080fd5b6122da82611fd9565b9392505050565b6000602082840312156122f357600080fd5b81356122da81612002565b60006020828403121561231057600080fd5b8135600481106122da57600080fd5b60048110612356577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b6000610100820190508982528860208301528760408301528660608301528560808301528460a083015261239160c083018561231f565b8260e08301529998505050505050505050565b60005b838110156123bf5781810151838201526020016123a7565b50506000910152565b600081518084526123e08160208601602086016123a4565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261243b6101608501836123c8565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261247683826123c8565b92505060608501516124a0608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125138187018315159052565b90950151151593019290925250919050565b60006020828403121561253757600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261257357600080fd5b83018035915067ffffffffffffffff82111561258e57600080fd5b6020019150368190038213156125a357600080fd5b9250929050565b600080858511156125ba57600080fd5b838611156125c757600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126145780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600082516122b58184602087016123a4565b60006020828403121561265057600080fd5b81516122da81612002565b6020815260006122da60208301846123c856fea2646970667358221220407eed64a2c2e7a7f5a3994186328be28a41bdbfbf3c6a7bfece3a9ea3f6ceb664736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_allBridge";
            readonly type: "address";
            readonly internalType: "contract IAllBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAllBridge";
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
            readonly name: "_allBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly components: readonly [{
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiveToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "messenger";
                readonly type: "uint8";
                readonly internalType: "enum IAllBridge.MessengerProtocol";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAllBridge";
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
            readonly name: "_allBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly components: readonly [{
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiveToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "messenger";
                readonly type: "uint8";
                readonly internalType: "enum IAllBridge.MessengerProtocol";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
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
    static createInterface(): AllBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AllBridgeFacet;
}
export {};
