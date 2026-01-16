import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LiFiIntentEscrowFacet, LiFiIntentEscrowFacetInterface } from "../LiFiIntentEscrowFacet";
type LiFiIntentEscrowFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiFiIntentEscrowFacet__factory extends ContractFactory {
    constructor(...args: LiFiIntentEscrowFacetConstructorParams);
    deploy(_inputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LiFiIntentEscrowFacet>;
    getDeployTransaction(_inputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LiFiIntentEscrowFacet;
    connect(signer: Signer): LiFiIntentEscrowFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161268638038061268683398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516125ce6100b85f395f81816048015281816109020152610b7601526125ce5ff3fe608060405260043610610033575f3560e01c80631fe5bb311461003757806373e72e5a14610093578063cd3c02ae146100a8575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a66100a1366004611c24565b6100c7565b005b3480156100b3575f5ffd5b506100a66100c2366004611cea565b61032d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610142576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556080850151859073ffffffffffffffffffffffffffffffffffffffff16610199576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f6101a53447611d4f565b9050878061010001516101e4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561023e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361027b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102b8576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6102cd8b5f01518c60c001518c8c33610538565b90508a60c001518111156102f9576102f98b60800151338d60c00151846102f49190611d4f565b61067a565b6103038b896106af565b50479150508181111561031f5761031f5f846102f48585611d4f565b50505f909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103a8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556080830151839073ffffffffffffffffffffffffffffffffffffffff166103ff576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836104228160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610459576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610496576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104d3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610100015115610511576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052386608001518760c00151610cee565b61052d86866106af565b50505f909155505050565b5f82808203610573576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610581600185611d4f565b81811061059057610590611d87565b90506020028101906105a29190611db4565b6105b3906080810190606001611df0565b90505f6105bf82610da2565b905073ffffffffffffffffffffffffffffffffffffffff82166105e9576105e63482611d4f565b90505b5f6105f48888610dec565b90506106008888610ef6565b61060d8a89898985610f62565b5f8261061885610da2565b6106229190611d4f565b90508981101561066c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166106a45761069f82826111aa565b505050565b61069f838383611217565b61012082015115155f6106c6610160840184611e10565b905011151514610702576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60208101358061073e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff16036108035760e0830151835160408051602081018590527ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b9101604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526107f691611ec7565b60405180910390a3610856565b60a083015173ffffffffffffffffffffffffffffffffffffffff168114610856576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6108676060840160408501611df0565b73ffffffffffffffffffffffffffffffffffffffff16036108b4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161014001355f036108f2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015160c0840151610927827f000000000000000000000000000000000000000000000000000000000000000083611285565b60408051602081019091525f8152610943610160860186611e10565b1590506109dd57855161095a610160870187611e10565b87602001356040516020016109729493929190611f80565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052853594509050836109dd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805160018082528183019092525f91816020015b610a356040518061010001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f815260200160608152602001606081525090565b8152602001906001900390816109f35790505090506040518061010001604052808760e00135815260200187610100013581526020018860e0015181526020018761012001358152602001876101400135815260200186815260200183815260200187806101800190610aa89190612115565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201829052509390945250508351849250610aee57610aee611d87565b60209081029190910101526040805160018082528183019092525f91816020015b610b176119d0565b815260200190600190039081610b0f57905050905060405180604001604052808673ffffffffffffffffffffffffffffffffffffffff16815260200185815250815f81518110610b6957610b69611d87565b60200260200101819052507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637515fd566040518061010001604052808a6040016020810190610bcf9190611df0565b73ffffffffffffffffffffffffffffffffffffffff1681526060808c0135602083015246604083015201610c0960a08c0160808d01612176565b63ffffffff168152602001610c2460c08c0160a08d01612176565b63ffffffff168152602001610c3f60e08c0160c08d01611df0565b73ffffffffffffffffffffffffffffffffffffffff168152602001848152602001858152506040518263ffffffff1660e01b8152600401610c8091906122d7565b5f604051808303815f87803b158015610c97575f5ffd5b505af1158015610ca9573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f188604051610cdc91906123b9565b60405180910390a15050505050505050565b805f03610d27576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d805780341015610d7c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610d7c73ffffffffffffffffffffffffffffffffffffffff83163330846112b1565b5f73ffffffffffffffffffffffffffffffffffffffff821615610de457610ddf73ffffffffffffffffffffffffffffffffffffffff831630611309565b610de6565b475b92915050565b6060815f8167ffffffffffffffff811115610e0957610e096119ee565b604051908082528060200260200182016040528015610e32578160200160208202803683370190505b5090505f5f5b83811015610eeb57868682818110610e5257610e52611d87565b9050602002810190610e649190611db4565b610e75906080810190606001611df0565b9150610e8082610da2565b838281518110610e9257610e92611d87565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ee35734838281518110610ecb57610ecb611d87565b60200260200101818151610edf9190611d4f565b9052505b600101610e38565b509095945050505050565b5f5b8181101561069f5736838383818110610f1357610f13611d87565b9050602002810190610f259190611db4565b9050610f3760e0820160c083016124cc565b15610f5957610f59610f4f6060830160408401611df0565b8260800135610cee565b50600101610ef8565b83838383825f80805b8381101561118e57368c8c83818110610f8657610f86611d87565b9050602002810190610f989190611db4565b9050610fa76020820182611df0565b9350610fb96040820160208301611df0565b925061105c84610fcc60a0840184612115565b610fda916004915f916124e5565b610fe39161250c565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061114457506110906110766060830160408401611df0565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156110c957508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611144575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561117b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111858e8261133c565b50600101610f6b565b5050505061119f848484845f6115a2565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff82166111f7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d7c73ffffffffffffffffffffffffffffffffffffffff8316826117b9565b73ffffffffffffffffffffffffffffffffffffffff8216611264576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61069f73ffffffffffffffffffffffffffffffffffffffff841683836117d2565b61069f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61181b565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166112fc57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61135461134c6020830183611df0565b6017903b1190565b61138a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036113c9576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6113dd6110766060850160408601611df0565b6113e7575f6113ed565b82608001355b90505f6114086114036080860160608701611df0565b610da2565b9050815f0361143e5761143e6114246060860160408701611df0565b6114346040870160208801611df0565b8660800135611285565b5f8061144d6020870187611df0565b73ffffffffffffffffffffffffffffffffffffffff168461147160a0890189612115565b60405161147f929190612572565b5f6040518083038185875af1925050503d805f81146114b9576040519150601f19603f3d011682016040523d82523d5f602084013e6114be565b606091505b5091509150816114d1576114d181611948565b5f6114e56114036080890160608a01611df0565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861151660208a018a611df0565b61152660608b0160408c01611df0565b61153660808c0160608d01611df0565b8b608001358987116115485786611552565b6115528a88611d4f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e001610cdc565b835f86826115b1600182611d4f565b8181106115c0576115c0611d87565b90506020028101906115d29190611db4565b6115e3906080810190606001611df0565b90505f5f5f5f5f5f5f5b888110156117a95761160060018a611d4f565b8110801561160f575088600114155b156116ea578d8d8281811061162657611626611d87565b90506020028101906116389190611db4565b611649906080810190606001611df0565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146116ea578a818151811061169057611690611d87565b60200260200101516116a187610da2565b6116ab9190611d4f565b965073ffffffffffffffffffffffffffffffffffffffff8616156116cf575f6116d1565b895b9350838711156116ea576116ea868d6102f4878b611d4f565b8d8d828181106116fc576116fc611d87565b905060200281019061170e9190611db4565b61171f906060810190604001611df0565b945061172a85610da2565b925073ffffffffffffffffffffffffffffffffffffffff85161561174e575f611750565b895b9150818311801561178d57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156117a1576117a1858d6102f48587611d4f565b6001016115ed565b5050505050505050505050505050565b5f385f3884865af1610d7c5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611812576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff8416156119425773ffffffffffffffffffffffffffffffffffffffff8316611884576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156118f7573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061191b9190612581565b10156119425761194273ffffffffffffffffffffffffffffffffffffffff85168483611952565b50505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611812575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661181257633e3f8f735f526004601cfd5b60405180604001604052806002906020820280368337509192915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611a3f57611a3f6119ee565b60405290565b5f82601f830112611a54575f5ffd5b813567ffffffffffffffff811115611a6e57611a6e6119ee565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611abb57611abb6119ee565b604052818152838201602001851015611ad2575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611b11575f5ffd5b919050565b80358015158114611b11575f5ffd5b5f6101408284031215611b36575f5ffd5b611b3e611a1b565b823581529050602082013567ffffffffffffffff811115611b5d575f5ffd5b611b6984828501611a45565b602083015250604082013567ffffffffffffffff811115611b88575f5ffd5b611b9484828501611a45565b604083015250611ba660608301611aee565b6060820152611bb760808301611aee565b6080820152611bc860a08301611aee565b60a082015260c0828101359082015260e08083013590820152611bee6101008301611b16565b610100820152611c016101208301611b16565b61012082015292915050565b5f6101a08284031215611c1e575f5ffd5b50919050565b5f5f5f5f60608587031215611c37575f5ffd5b843567ffffffffffffffff811115611c4d575f5ffd5b611c5987828801611b25565b945050602085013567ffffffffffffffff811115611c75575f5ffd5b8501601f81018713611c85575f5ffd5b803567ffffffffffffffff811115611c9b575f5ffd5b8760208260051b8401011115611caf575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611cd2575f5ffd5b611cde87828801611c0d565b91505092959194509250565b5f5f60408385031215611cfb575f5ffd5b823567ffffffffffffffff811115611d11575f5ffd5b611d1d85828601611b25565b925050602083013567ffffffffffffffff811115611d39575f5ffd5b611d4585828601611c0d565b9150509250929050565b81810381811115610de6577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611de6575f5ffd5b9190910192915050565b5f60208284031215611e00575f5ffd5b611e0982611aee565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e43575f5ffd5b83018035915067ffffffffffffffff821115611e5d575f5ffd5b6020019150600581901b3603821315611e74575f5ffd5b9250929050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081525f611e096020830184611e7b565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611f0c575f5ffd5b830160208101925035905067ffffffffffffffff811115611f2b575f5ffd5b803603821315611e74575f5ffd5b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f60608201868352606060208401528085825260808401905060808660051b8501019150865f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21893603015b888210156120ff577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808786030184528235818112612008575f5ffd5b8a0173ffffffffffffffffffffffffffffffffffffffff61202882611aee565b16865273ffffffffffffffffffffffffffffffffffffffff61204c60208301611aee565b16602087015273ffffffffffffffffffffffffffffffffffffffff61207360408301611aee565b16604087015261208560608201611aee565b73ffffffffffffffffffffffffffffffffffffffff166060870152608081810135908701526120b760a0820182611ed9565b60e060a08901526120cc60e089018284611f39565b9150506120db60c08301611b16565b80151560c08901529150955050602093840193929092019160019190910190611fcc565b5050505060409290920192909252949350505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612148575f5ffd5b83018035915067ffffffffffffffff821115612162575f5ffd5b602001915036819003821315611e74575f5ffd5b5f60208284031215612186575f5ffd5b813563ffffffff81168114611e09575f5ffd5b5f8151808452602084019350602083015f5b828110156121f0578151865f5b60028110156121d75782518252602092830192909101906001016121b8565b50505060409590950194602091909101906001016121ab565b5093949350505050565b5f82825180855260208501945060208160051b830101602085015f5b838110156122cb577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030188528151805184526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015161010060c0860152612298610100860182611e7b565b905060e0820151915084810360e08601526122b38183611e7b565b60209a8b019a90955093909301925050600101612216565b50909695505050505050565b6020815273ffffffffffffffffffffffffffffffffffffffff825116602082015260208201516040820152604082015160608201525f6060830151612324608084018263ffffffff169052565b50608083015163ffffffff811660a08401525060a083015173ffffffffffffffffffffffffffffffffffffffff811660c08401525060c083015161010060e0840152612374610120840182612199565b905060e08401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016101008501526123b082826121fa565b95945050505050565b60208152815160208201525f602083015161014060408401526123e0610160840182611e7b565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261241b8282611e7b565b9150506060840151612445608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516124b461012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156124dc575f5ffd5b611e0982611b16565b5f5f858511156124f3575f5ffd5b838611156124ff575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561256b577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612591575f5ffd5b505191905056fea2646970667358221220cd6c574bab3ee73348cfc6e8c94d56c49a977fd401e4d9574ef7bc8b4397d96764736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_inputSettler";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "LIFI_INTENT_ESCROW_SETTLER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaLiFiIntentEscrow";
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
            readonly name: "_lifiIntentData";
            readonly type: "tuple";
            readonly internalType: "struct LiFiIntentEscrowFacet.LiFiIntentEscrowData";
            readonly components: readonly [{
                readonly name: "dstCallReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAndRefundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputOracle";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputSettler";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "dstCallSwapData";
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
                readonly name: "outputContext";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaLiFiIntentEscrow";
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
            readonly name: "_lifiIntentData";
            readonly type: "tuple";
            readonly internalType: "struct LiFiIntentEscrowFacet.LiFiIntentEscrowData";
            readonly components: readonly [{
                readonly name: "dstCallReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAndRefundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputOracle";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputSettler";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "dstCallSwapData";
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
                readonly name: "outputContext";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
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
        readonly name: "NativeAssetNotSupported";
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
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): LiFiIntentEscrowFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiFiIntentEscrowFacet;
}
export {};
