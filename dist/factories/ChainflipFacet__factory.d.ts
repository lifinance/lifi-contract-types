import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ChainflipFacet, ChainflipFacetInterface } from "../ChainflipFacet";
declare type ChainflipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ChainflipFacet__factory extends ContractFactory {
    constructor(...args: ChainflipFacetConstructorParams);
    deploy(_chainflipVault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ChainflipFacet>;
    getDeployTransaction(_chainflipVault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ChainflipFacet;
    connect(signer: Signer): ChainflipFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620027083803806200270883398101604081905262000034916200006e565b6001600160a01b0381166200005c576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052620000a0565b6000602082840312156200008157600080fd5b81516001600160a01b03811681146200009957600080fd5b9392505050565b60805161262a620000de6000396000818160600152818161076c015281816108450152818161090101528181610a200152610ab6015261262a6000f3fe6080604052600436106100345760003560e01c80630ad553b3146100395780637766d1ed1461004e578063ee3314a1146100ab575b600080fd5b61004c610047366004611cad565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b9366004611d11565b6102a8565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447611dd0565b90508461016f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61027187608001518860c00151610496565b61027b878761054b565b504790508181111561029c5761029c6000846102978585611dd0565b610b97565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610323576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103343447611dd0565b905086806101000151610373576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103968160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103cd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361040b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610448576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61045d89600001518a60c001518a8a33610bcc565b60c08a015261046c898761054b565b5047905081811115610488576104886000846102978585611dd0565b505060009091555050505050565b806000036104d0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105295780341015610525576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61052573ffffffffffffffffffffffffffffffffffffffff8316333084610d16565b600061055a8360e00151610d73565b90506000610580846080015173ffffffffffffffffffffffffffffffffffffffff161590565b905060607311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168560a0015173ffffffffffffffffffffffffffffffffffffffff16036106a3576105d98480611e0a565b9050600003610614576040517f6e70c56c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61061e8480611e0a565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505060e08601518651919250907ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b6106888780611e0a565b604051610696929190611ebf565b60405180910390a361075d565b60008561012001516106b9578560a001516106c9565b6106c96060860160408701611edb565b905073ffffffffffffffffffffffffffffffffffffffff8116610718576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606083901b1660208201526034016040516020818303038152906040529150505b816107955761079585608001517f00000000000000000000000000000000000000000000000000000000000000008760c00151610df8565b846101200151156109b5576107ad6060850185611efd565b90506000036107e8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84516000906107fa6060870187611efd565b8860a001516040516020016108129493929190611fc9565b604051602081830303815290604052905082156108ea5760c086015173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906307933dd290868561087e60408b0160208c01612142565b8660808c013561089160a08e018e611e0a565b6040518963ffffffff1660e01b81526004016108b397969594939291906121cc565b6000604051808303818588803b1580156108cc57600080fd5b505af11580156108e0573d6000803e3d6000fd5b50505050506109af565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663bbddc2fb858461093860408a0160208b01612142565b858a608001358c608001518d60c001518d8060a001906109589190611e0a565b6040518a63ffffffff1660e01b815260040161097c99989796959493929190612230565b600060405180830381600087803b15801561099657600080fd5b505af11580156109aa573d6000803e3d6000fd5b505050505b50610b59565b60006109c46060860186611efd565b905011156109fe576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8115610a9f5760c085015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063dd687345908584610a5960408a0160208b01612142565b610a6660a08b018b611e0a565b6040518763ffffffff1660e01b8152600401610a869594939291906122ba565b6000604051808303818588803b15801561099657600080fd5b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166304fc7da08483610aed6040890160208a01612142565b60808a015160c08b0151610b0460a08c018c611e0a565b6040518863ffffffff1660e01b8152600401610b269796959493929190612302565b600060405180830381600087803b158015610b4057600080fd5b505af1158015610b54573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f185604051610b88919061236e565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bc157610bbc8282610e24565b505050565b610bbc838383610e91565b600082808203610c08576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610c17600185611dd0565b818110610c2657610c26612481565b9050602002810190610c3891906124b0565b610c49906080810190606001611edb565b90506000610c5682610eff565b905073ffffffffffffffffffffffffffffffffffffffff8216610c8057610c7d3482611dd0565b90505b6000610c8c8888610f4a565b9050610c988888611056565b610ca58a898989856110c3565b600082610cb185610eff565b610cbb9190611dd0565b905089811015610d06576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9450505050505b95945050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610d6557637939f4246000526004601cfd5b600060605260405250505050565b600060018203610d8557506001919050565b61a4b18203610d9657506004919050565b660416edef1601be8203610dac57506005919050565b6512309ce540018203610dc157506003919050565b6040517f63b7b64100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b610bbc8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611475565b73ffffffffffffffffffffffffffffffffffffffff8216610e71576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052573ffffffffffffffffffffffffffffffffffffffff831682611588565b73ffffffffffffffffffffffffffffffffffffffff8216610ede576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bbc73ffffffffffffffffffffffffffffffffffffffff841683836115a4565b600073ffffffffffffffffffffffffffffffffffffffff821615610f4257610f3d73ffffffffffffffffffffffffffffffffffffffff8316306115f3565b610f44565b475b92915050565b60608160008167ffffffffffffffff811115610f6857610f68611a78565b604051908082528060200260200182016040528015610f91578160200160208202803683370190505b5090506000805b8381101561104b57868682818110610fb257610fb2612481565b9050602002810190610fc491906124b0565b610fd5906080810190606001611edb565b9150610fe082610eff565b838281518110610ff257610ff2612481565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611043573483828151811061102b5761102b612481565b6020026020010181815161103f9190611dd0565b9052505b600101610f98565b509095945050505050565b60005b81811015610bbc573683838381811061107457611074612481565b905060200281019061108691906124b0565b905061109860e0820160c083016124ee565b156110ba576110ba6110b06060830160408401611edb565b8260800135610496565b50600101611059565b83838383826001811461139057600085856110df600185611dd0565b8181106110ee576110ee612481565b905060200281019061110091906124b0565b611111906080810190606001611edb565b9050600089815b818110156112bc57368d8d8381811061113357611133612481565b905060200281019061114591906124b0565b905061117461115a6060830160408401611edb565b73ffffffffffffffffffffffffffffffffffffffff161590565b806111d757506111d761118d6040830160208401611edb565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156111ee57506111ee61118d6020830183611edb565b8015611273575061127361120560a0830183611e0a565b61121491600491600091612509565b61121d91612533565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6112a9576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112b38f82611628565b50600101611118565b505060005b6112cc600185611dd0565b8110156113885760008888838181106112e7576112e7612481565b90506020028101906112f991906124b0565b61130a906080810190606001611edb565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461137f5785828151811061135157611351612481565b602002602001015161136282610eff565b61136c9190611dd0565b9250821561137f5761137f818885610b97565b506001016112c1565b505050611469565b8760005b8181101561146657368b8b838181106113af576113af612481565b90506020028101906113c191906124b0565b90506113d661115a6060830160408401611edb565b806113ef57506113ef61118d6040830160208401611edb565b8015611406575061140661118d6020830183611edb565b801561141d575061141d61120560a0830183611e0a565b611453576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61145d8d82611628565b50600101611394565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166114c2576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611537573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155b919061257b565b10156115825761158273ffffffffffffffffffffffffffffffffffffffff85168483611905565b50505050565b60003860003884865af16105255763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166115e9576390b8ec186000526004601cfd5b6000603452505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61163d6116386020830183611edb565b61198f565b611673576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036116b3576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006116c861115a6060850160408601611edb565b6116d35760006116d9565b82608001355b905060006116f56116f06060860160408701611edb565b610eff565b9050600061170c6116f06080870160608801611edb565b905082600003611743576117436117296060870160408801611edb565b6117396040880160208901611edb565b8760800135610df8565b846080013582101561178e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610cfd565b60008061179e6020880188611edb565b73ffffffffffffffffffffffffffffffffffffffff16856117c260a08a018a611e0a565b6040516117d0929190612594565b60006040518083038185875af1925050503d806000811461180d576040519150601f19603f3d011682016040523d82523d6000602084013e611812565b606091505b5091509150816118255761182581611a6e565b600061183a6116f060808a0160608b01611edb565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961186b60208b018b611edb565b61187b60608c0160408d01611edb565b61188b60808d0160608e01611edb565b8c6080013589871161189d57866118a7565b6118a78a88611dd0565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166115e95760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166115e957633e3f8f736000526004601cfd5b604080516003808252818301909252600091829182917fef0100000000000000000000000000000000000000000000000000000000000091839160208201818036833701905050863b945090507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4706003600060208401893c863f93506000611a16836125a4565b90507fffffff000000000000000000000000000000000000000000000000000000000080851690821603611a5257506001979650505050505050565b600086118015611a625750818514155b98975050505050505050565b8051602082018181fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611acb57611acb611a78565b60405290565b600082601f830112611ae257600080fd5b813567ffffffffffffffff80821115611afd57611afd611a78565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611b4357611b43611a78565b81604052838152866020858801011115611b5c57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610df357600080fd5b80358015158114610df357600080fd5b60006101408284031215611bc357600080fd5b611bcb611aa7565b905081358152602082013567ffffffffffffffff80821115611bec57600080fd5b611bf885838601611ad1565b60208401526040840135915080821115611c1157600080fd5b50611c1e84828501611ad1565b604083015250611c3060608301611b7c565b6060820152611c4160808301611b7c565b6080820152611c5260a08301611b7c565b60a082015260c082013560c082015260e082013560e0820152610100611c79818401611ba0565b90820152610120611c8b838201611ba0565b9082015292915050565b600060c08284031215611ca757600080fd5b50919050565b60008060408385031215611cc057600080fd5b823567ffffffffffffffff80821115611cd857600080fd5b611ce486838701611bb0565b93506020850135915080821115611cfa57600080fd5b50611d0785828601611c95565b9150509250929050565b60008060008060608587031215611d2757600080fd5b843567ffffffffffffffff80821115611d3f57600080fd5b611d4b88838901611bb0565b95506020870135915080821115611d6157600080fd5b818701915087601f830112611d7557600080fd5b813581811115611d8457600080fd5b8860208260051b8501011115611d9957600080fd5b602083019550809450506040870135915080821115611db757600080fd5b50611dc487828801611c95565b91505092959194509250565b81810381811115610f44577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e3f57600080fd5b83018035915067ffffffffffffffff821115611e5a57600080fd5b602001915036819003821315611e6f57600080fd5b9250929050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b602081526000611ed3602083018486611e76565b949350505050565b600060208284031215611eed57600080fd5b611ef682611b7c565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611f3257600080fd5b83018035915067ffffffffffffffff821115611f4d57600080fd5b6020019150600581901b3603821315611e6f57600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611f9a57600080fd5b830160208101925035905067ffffffffffffffff811115611fba57600080fd5b803603821315611e6f57600080fd5b600060608083018784526020828186015281878352608092508286019050828860051b870101896000805b8b811015612117577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808a850301855282357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218e3603018112612054578283fd5b8d0160e073ffffffffffffffffffffffffffffffffffffffff8061207784611b7c565b168752806120868a8501611b7c565b1689880152604081612099828601611b7c565b1690880152506120aa828b01611b7c565b73ffffffffffffffffffffffffffffffffffffffff168a870152818901358987015260a06120da81840184611f65565b83838a01526120ec848a018284611e76565b935050505060c06120fe818401611ba0565b1515960195909552509385019391850191600101611ff4565b50505073ffffffffffffffffffffffffffffffffffffffff881660408801529450610d0d9350505050565b60006020828403121561215457600080fd5b813563ffffffff81168114611ef657600080fd5b6000815180845260005b8181101561218e57602081850181015186830182015201612172565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b600063ffffffff808a16835260c060208401526121ec60c084018a612168565b818916604085015283810360608501526122068189612168565b91505085608084015282810360a0840152612222818587611e76565b9a9950505050505050505050565b600061010063ffffffff808d1684528160208501526122518285018d612168565b908b1660408501528381036060850152905061226d818a612168565b905087608084015273ffffffffffffffffffffffffffffffffffffffff871660a08401528560c084015282810360e08401526122aa818587611e76565b9c9b505050505050505050505050565b600063ffffffff8088168352608060208401526122da6080840188612168565b818716604085015283810360608501526122f5818688611e76565b9998505050505050505050565b600063ffffffff808a16835260c0602084015261232260c084018a612168565b818916604085015273ffffffffffffffffffffffffffffffffffffffff8816606085015286608085015283810360a085015261235f818688611e76565b9b9a5050505050505050505050565b602081528151602082015260006020830151610140806040850152612397610160850183612168565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526123d28382612168565b92505060608501516123fc608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061246f8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126124e457600080fd5b9190910192915050565b60006020828403121561250057600080fd5b611ef682611ba0565b6000808585111561251957600080fd5b8386111561252657600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156125735780818660040360031b1b83161692505b505092915050565b60006020828403121561258d57600080fd5b5051919050565b8183823760009101908152919050565b6000815160208301517fffffff0000000000000000000000000000000000000000000000000000000000808216935060038310156125ec5780818460030360031b1b83161693505b50505091905056fea2646970667358221220e9728f7c8fcad97bd88d3d9fbc71fca9da8c1aa644c9cb5609c7173954a85e2564736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_chainflipVault";
            readonly type: "address";
            readonly internalType: "contract IChainflipVault";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "chainflipVault";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IChainflipVault";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaChainflip";
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
            readonly name: "_chainflipData";
            readonly type: "tuple";
            readonly internalType: "struct ChainflipFacet.ChainflipData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "dstToken";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "dstCallReceiver";
                readonly type: "address";
                readonly internalType: "address";
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
                readonly name: "gasAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "cfParameters";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaChainflip";
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
            readonly name: "_chainflipData";
            readonly type: "tuple";
            readonly internalType: "struct ChainflipFacet.ChainflipData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "dstToken";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "dstCallReceiver";
                readonly type: "address";
                readonly internalType: "address";
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
                readonly name: "gasAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "cfParameters";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "EmptyNonEvmAddress";
        readonly inputs: readonly [];
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
    }, {
        readonly type: "error";
        readonly name: "UnsupportedChainflipChainId";
        readonly inputs: readonly [];
    }];
    static createInterface(): ChainflipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ChainflipFacet;
}
export {};
