import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { StargateFacetV2, StargateFacetV2Interface } from "../StargateFacetV2";
type StargateFacetV2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StargateFacetV2__factory extends ContractFactory {
    constructor(...args: StargateFacetV2ConstructorParams);
    deploy(_tokenMessaging: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<StargateFacetV2>;
    getDeployTransaction(_tokenMessaging: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): StargateFacetV2;
    connect(signer: Signer): StargateFacetV2__factory;
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b5060405161249f38038061249f833981016040819052602b91603b565b6001600160a01b03166080526066565b5f60208284031215604a575f5ffd5b81516001600160a01b0381168114605f575f5ffd5b9392505050565b60805161241b6100845f395f818160700152610692015261241b5ff3fe608060405260043610610033575f3560e01c806314d5307714610037578063a6010a661461004c578063fb214c2f1461005f575b5f5ffd5b61004a61004536600461183f565b6100bb565b005b61004a61005a366004611b9f565b6102c4565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611c92565b905061015185611ca5565b8061010001511561018e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61019786611ca5565b60a081015173ffffffffffffffffffffffffffffffffffffffff166101e8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610225576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610262576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61027f61027560a0890160808a01611cb0565b8860c001356104b5565b61029961028b88611ca5565b61029488611d14565b610569565b50479050818111156102b9576102b95f846102b48585611c92565b6109d2565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161033f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61034f3447611c92565b90508680610100015161038e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103b18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610425576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610462576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b885160c08a015161047b91908a8a3360408c0135610a07565b60c08a015261048d8961029488611d14565b50479050818111156104a8576104a85f846102b48585611c92565b50505f9091555050505050565b805f036104ee576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105475780341015610543576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61054373ffffffffffffffffffffffffffffffffffffffff8316333084610b9d565b610120820151602082015160a001515115159015151415806105a0575081610120015180156105a05750602081015160c001515115155b156105d7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81610120015115801561062457508060200151602001515f1c73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b1561065b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516040517f5f6d9ae400000000000000000000000000000000000000000000000000000000815261ffff90911660048201525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f6d9ae4906024016020604051808303815f875af11580156106ed573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107119190611e4b565b905073ffffffffffffffffffffffffffffffffffffffff811661076e5781516040517f420c482e00000000000000000000000000000000000000000000000000000000815261ffff90911660048201526024015b60405180910390fd5b604082015151608084015173ffffffffffffffffffffffffffffffffffffffff166107a95760c08401516107a29082611e66565b90506108be565b60808401516040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff84811660248301525f919083169063dd62ed3e90604401602060405180830381865afa158015610821573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108459190611e79565b90508560c001518110156108bb57801561087a5761087a73ffffffffffffffffffffffffffffffffffffffff8316855f610bf5565b6108bb73ffffffffffffffffffffffffffffffffffffffff8316857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610bf5565b50505b60c08401516020840180516040908101929092525181850151606086015192517fcbef2aa900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86169363cbef2aa99386936109319391929091600401611edc565b5f6040518083038185885af115801561094c573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261099291908101906120ae565b5050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516109c4919061214c565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83166109fc576109f78282610c3e565b505050565b6109f7838383610cab565b5f83808203610a42576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610a50600185611c92565b818110610a5f57610a5f61225f565b9050602002810190610a71919061228c565b610a82906080810190606001611cb0565b90505f610a8e82610d19565b905073ffffffffffffffffffffffffffffffffffffffff8216610ab857610ab53482611c92565b90505b5f610ac38989610d63565b9050610acf8989610e6d565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610b0a818b8b85610ed9565b5f83610b1586610d19565b610b1f9190611c92565b905073ffffffffffffffffffffffffffffffffffffffff8516610b4957610b468882611c92565b90505b8b811015610b8d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d905260248101829052604401610765565b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610be857637939f4245f526004601cfd5b5f60605260405250505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c3557633e3f8f735f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c8b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61054373ffffffffffffffffffffffffffffffffffffffff831682611132565b73ffffffffffffffffffffffffffffffffffffffff8216610cf8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109f773ffffffffffffffffffffffffffffffffffffffff8416838361114b565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d5b57610d5673ffffffffffffffffffffffffffffffffffffffff83163061118b565b610d5d565b475b92915050565b6060815f8167ffffffffffffffff811115610d8057610d806118a9565b604051908082528060200260200182016040528015610da9578160200160208202803683370190505b5090505f5f5b83811015610e6257868682818110610dc957610dc961225f565b9050602002810190610ddb919061228c565b610dec906080810190606001611cb0565b9150610df782610d19565b838281518110610e0957610e0961225f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e5a5734838281518110610e4257610e4261225f565b60200260200101818151610e569190611c92565b9052505b600101610daf565b509095945050505050565b5f5b818110156109f75736838383818110610e8a57610e8a61225f565b9050602002810190610e9c919061228c565b9050610eae60e0820160c083016122c8565b15610ed057610ed0610ec66060830160408401611cb0565b82608001356104b5565b50600101610e6f565b60208401516040850151849184918490835f5b8181101561111857368a8a83818110610f0757610f0761225f565b9050602002810190610f19919061228c565b90505f610f296020830183611cb0565b90505f610f3c6040840160208501611cb0565b9050610fdf82610f4f60a08601866122e1565b610f5d916004915f91612349565b610f6691612370565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806110c75750611013610ff96060850160408601611cb0565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561104c57508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156110c7575073ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156110fe576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d5161110a90846111be565b836001019350505050610eec565b50506111278585858585611431565b505050505050505050565b5f385f3884865af16105435763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c35576390b8ec185f526004601cfd5b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6111d66111ce6020830183611cb0565b6017903b1190565b61120c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361124b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61125f610ff96060850160408601611cb0565b611269575f61126f565b82608001355b90505f61128a6112856080860160608701611cb0565b610d19565b9050815f036112c0576112c06112a66060860160408701611cb0565b6112b66040870160208801611cb0565b8660800135611648565b5f806112cf6020870187611cb0565b73ffffffffffffffffffffffffffffffffffffffff16846112f360a08901896122e1565b6040516113019291906123d6565b5f6040518083038185875af1925050503d805f811461133b576040519150601f19603f3d011682016040523d82523d5f602084013e611340565b606091505b5091509150816113535761135381611674565b5f6113676112856080890160608a01611cb0565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861139860208a018a611cb0565b6113a860608b0160408c01611cb0565b6113b860808c0160608d01611cb0565b8b608001358987116113ca57866113d4565b6113d48a88611c92565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611440600182611c92565b81811061144f5761144f61225f565b9050602002810190611461919061228c565b611472906080810190606001611cb0565b90505f5f5f5f5f5f5f5b888110156116385761148f60018a611c92565b8110801561149e575088600114155b15611579578d8d828181106114b5576114b561225f565b90506020028101906114c7919061228c565b6114d8906080810190606001611cb0565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611579578a818151811061151f5761151f61225f565b602002602001015161153087610d19565b61153a9190611c92565b965073ffffffffffffffffffffffffffffffffffffffff86161561155e575f611560565b895b93508387111561157957611579868d6102b4878b611c92565b8d8d8281811061158b5761158b61225f565b905060200281019061159d919061228c565b6115ae906060810190604001611cb0565b94506115b985610d19565b925073ffffffffffffffffffffffffffffffffffffffff8516156115dd575f6115df565b895b9150818311801561161c57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561163057611630858d6102b48587611c92565b60010161147c565b5050505050505050505050505050565b6109f78383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61167e565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156117a55773ffffffffffffffffffffffffffffffffffffffff83166116e7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561175a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061177e9190611e79565b10156117a5576117a573ffffffffffffffffffffffffffffffffffffffff851684836117ab565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c35575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610c3557633e3f8f735f526004601cfd5b5f60a08284031215611839575f5ffd5b50919050565b5f5f60408385031215611850575f5ffd5b823567ffffffffffffffff811115611866575f5ffd5b83016101408186031215611878575f5ffd5b9150602083013567ffffffffffffffff811115611893575f5ffd5b61189f85828601611829565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156118fa576118fa6118a9565b60405290565b6040805190810167ffffffffffffffff811182821017156118fa576118fa6118a9565b6040516080810167ffffffffffffffff811182821017156118fa576118fa6118a9565b60405160e0810167ffffffffffffffff811182821017156118fa576118fa6118a9565b6040516060810167ffffffffffffffff811182821017156118fa576118fa6118a9565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156119d3576119d36118a9565b604052919050565b5f67ffffffffffffffff8211156119f4576119f46118a9565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f830112611a2f575f5ffd5b8135602083015f611a47611a42846119db565b61198c565b9050828152858383011115611a5a575f5ffd5b828260208301375f92810160200192909252509392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611a95575f5ffd5b50565b8035611aa381611a74565b919050565b80358015158114611aa3575f5ffd5b5f6101408284031215611ac8575f5ffd5b611ad06118d6565b823581529050602082013567ffffffffffffffff811115611aef575f5ffd5b611afb84828501611a20565b602083015250604082013567ffffffffffffffff811115611b1a575f5ffd5b611b2684828501611a20565b604083015250611b3860608301611a98565b6060820152611b4960808301611a98565b6080820152611b5a60a08301611a98565b60a082015260c0828101359082015260e08083013590820152611b806101008301611aa8565b610100820152611b936101208301611aa8565b61012082015292915050565b5f5f5f5f60608587031215611bb2575f5ffd5b843567ffffffffffffffff811115611bc8575f5ffd5b611bd487828801611ab7565b945050602085013567ffffffffffffffff811115611bf0575f5ffd5b8501601f81018713611c00575f5ffd5b803567ffffffffffffffff811115611c16575f5ffd5b8760208260051b8401011115611c2a575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611c4d575f5ffd5b611c5987828801611829565b91505092959194509250565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610d5d57610d5d611c65565b5f610d5d3683611ab7565b5f60208284031215611cc0575f5ffd5b8135611ccb81611a74565b9392505050565b803563ffffffff81168114611aa3575f5ffd5b5f60408284031215611cf5575f5ffd5b611cfd611900565b823581526020928301359281019290925250919050565b5f60a08236031215611d24575f5ffd5b611d2c611923565b823561ffff81168114611d3d575f5ffd5b8152602083013567ffffffffffffffff811115611d58575f5ffd5b830160e0368290031215611d6a575f5ffd5b611d72611946565b611d7b82611cd2565b8152602082810135908201526040808301359082015260608083013590820152608082013567ffffffffffffffff811115611db4575f5ffd5b611dc036828501611a20565b60808301525060a082013567ffffffffffffffff811115611ddf575f5ffd5b611deb36828501611a20565b60a08301525060c082013567ffffffffffffffff811115611e0a575f5ffd5b611e1636828501611a20565b60c083015250602083015250611e2f3660408501611ce5565b6040820152611e4060808401611a98565b606082015292915050565b5f60208284031215611e5b575f5ffd5b8151611ccb81611a74565b80820180821115610d5d57610d5d611c65565b5f60208284031215611e89575f5ffd5b5051919050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6080815263ffffffff8451166080820152602084015160a0820152604084015160c0820152606084015160e08201525f608085015160e0610100840152611f27610160840182611e90565b905060a08601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8084830301610120850152611f638282611e90565b91505060c08601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8084830301610140850152611fa08282611e90565b92505050611fbb602083018580518252602090810151910152565b73ffffffffffffffffffffffffffffffffffffffff83166060830152949350505050565b5f60408284031215611fef575f5ffd5b611ff7611900565b825181526020928301519281019290925250919050565b5f6040828403121561201e575f5ffd5b612026611900565b9050815168ffffffffffffffffff81168114612040575f5ffd5b8152602082015167ffffffffffffffff81111561205b575f5ffd5b8201601f8101841361206b575f5ffd5b8051612079611a42826119db565b81815285602083850101111561208d575f5ffd5b8160208401602083015e5f6020838301015280602085015250505092915050565b5f5f5f83850360e08112156120c1575f5ffd5b60808112156120ce575f5ffd5b506120d7611969565b84518152602085015167ffffffffffffffff811681146120f5575f5ffd5b60208201526121078660408701611fdf565b6040820152925061211b8560808601611fdf565b915060c084015167ffffffffffffffff811115612136575f5ffd5b6121428682870161200e565b9150509250925092565b60208152815160208201525f60208301516101406040840152612173610160840182611e90565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526121ae8282611e90565b91505060608401516121d8608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161224761012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122be575f5ffd5b9190910192915050565b5f602082840312156122d8575f5ffd5b611ccb82611aa8565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612314575f5ffd5b83018035915067ffffffffffffffff82111561232e575f5ffd5b602001915036819003821315612342575f5ffd5b9250929050565b5f5f85851115612357575f5ffd5b83861115612363575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156123cf577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f910190815291905056fea2646970667358221220113bef7e42c8179f34a062d4d3df652f8514511b90acbc793540f0d522d324a564736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_tokenMessaging";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaStargate";
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
            readonly name: "_stargateData";
            readonly type: "tuple";
            readonly internalType: "struct StargateFacetV2.StargateData";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "sendParams";
                readonly type: "tuple";
                readonly internalType: "struct IStargate.SendParam";
                readonly components: readonly [{
                    readonly name: "dstEid";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "to";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "amountLD";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "minAmountLD";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "extraOptions";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "composeMsg";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "oftCmd";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "fee";
                readonly type: "tuple";
                readonly internalType: "struct IStargate.MessagingFee";
                readonly components: readonly [{
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "lzTokenFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaStargate";
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
            readonly name: "_stargateData";
            readonly type: "tuple";
            readonly internalType: "struct StargateFacetV2.StargateData";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "sendParams";
                readonly type: "tuple";
                readonly internalType: "struct IStargate.SendParam";
                readonly components: readonly [{
                    readonly name: "dstEid";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "to";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "amountLD";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "minAmountLD";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "extraOptions";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "composeMsg";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "oftCmd";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "fee";
                readonly type: "tuple";
                readonly internalType: "struct IStargate.MessagingFee";
                readonly components: readonly [{
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "lzTokenFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "tokenMessaging";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ITokenMessaging";
        }];
        readonly stateMutability: "view";
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
        readonly name: "InvalidAssetId";
        readonly inputs: readonly [{
            readonly name: "invalidAssetId";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
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
    }];
    static createInterface(): StargateFacetV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): StargateFacetV2;
}
export {};
