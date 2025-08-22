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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051612417380380612417833981016040819052602b91603b565b6001600160a01b03166080526066565b5f60208284031215604a575f5ffd5b81516001600160a01b0381168114605f575f5ffd5b9392505050565b6080516123936100845f395f81816070015261069201526123935ff3fe608060405260043610610033575f3560e01c806314d5307714610037578063a6010a661461004c578063fb214c2f1461005f575b5f5ffd5b61004a6100453660046117b7565b6100bb565b005b61004a61005a366004611b17565b6102c4565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611c0a565b905061015185611c1d565b8061010001511561018e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61019786611c1d565b60a081015173ffffffffffffffffffffffffffffffffffffffff166101e8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610225576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610262576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61027f61027560a0890160808a01611c28565b8860c001356104b5565b61029961028b88611c1d565b61029488611c8c565b610569565b50479050818111156102b9576102b95f846102b48585611c0a565b6109d2565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161033f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61034f3447611c0a565b90508680610100015161038e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103b18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610425576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610462576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b885160c08a015161047b91908a8a3360408c0135610a07565b60c08a015261048d8961029488611c8c565b50479050818111156104a8576104a85f846102b48585611c0a565b50505f9091555050505050565b805f036104ee576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105475780341015610543576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61054373ffffffffffffffffffffffffffffffffffffffff8316333084610b9d565b610120820151602082015160a001515115159015151415806105a0575081610120015180156105a05750602081015160c001515115155b156105d7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81610120015115801561062457508060200151602001515f1c73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b1561065b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516040517f5f6d9ae400000000000000000000000000000000000000000000000000000000815261ffff90911660048201525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f6d9ae4906024016020604051808303815f875af11580156106ed573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107119190611dc3565b905073ffffffffffffffffffffffffffffffffffffffff811661076e5781516040517f420c482e00000000000000000000000000000000000000000000000000000000815261ffff90911660048201526024015b60405180910390fd5b604082015151608084015173ffffffffffffffffffffffffffffffffffffffff166107a95760c08401516107a29082611dde565b90506108be565b60808401516040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff84811660248301525f919083169063dd62ed3e90604401602060405180830381865afa158015610821573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108459190611df1565b90508560c001518110156108bb57801561087a5761087a73ffffffffffffffffffffffffffffffffffffffff8316855f610bf5565b6108bb73ffffffffffffffffffffffffffffffffffffffff8316857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610bf5565b50505b60c08401516020840180516040908101929092525181850151606086015192517fcbef2aa900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86169363cbef2aa99386936109319391929091600401611e54565b5f6040518083038185885af115801561094c573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109929190810190612026565b5050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516109c491906120c4565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83166109fc576109f78282610c3e565b505050565b6109f7838383610cab565b5f83808203610a42576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610a50600185611c0a565b818110610a5f57610a5f6121d7565b9050602002810190610a719190612204565b610a82906080810190606001611c28565b90505f610a8e82610d19565b905073ffffffffffffffffffffffffffffffffffffffff8216610ab857610ab53482611c0a565b90505b5f610ac38989610d63565b9050610acf8989610e6d565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610b0a818b8b85610ed9565b5f83610b1586610d19565b610b1f9190611c0a565b905073ffffffffffffffffffffffffffffffffffffffff8516610b4957610b468882611c0a565b90505b8b811015610b8d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d905260248101829052604401610765565b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610be857637939f4245f526004601cfd5b5f60605260405250505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c3557633e3f8f735f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c8b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61054373ffffffffffffffffffffffffffffffffffffffff8316826112c1565b73ffffffffffffffffffffffffffffffffffffffff8216610cf8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109f773ffffffffffffffffffffffffffffffffffffffff841683836112da565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d5b57610d5673ffffffffffffffffffffffffffffffffffffffff83163061131a565b610d5d565b475b92915050565b6060815f8167ffffffffffffffff811115610d8057610d80611821565b604051908082528060200260200182016040528015610da9578160200160208202803683370190505b5090505f805b83811015610e6257868682818110610dc957610dc96121d7565b9050602002810190610ddb9190612204565b610dec906080810190606001611c28565b9150610df782610d19565b838281518110610e0957610e096121d7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e5a5734838281518110610e4257610e426121d7565b60200260200101818151610e569190611c0a565b9052505b600101610daf565b509095945050505050565b5f5b818110156109f75736838383818110610e8a57610e8a6121d7565b9050602002810190610e9c9190612204565b9050610eae60e0820160c08301612240565b15610ed057610ed0610ec66060830160408401611c28565b82608001356104b5565b50600101610e6f565b6020840151604085015184918491849083600181146111db575f8686610f00600185611c0a565b818110610f0f57610f0f6121d7565b9050602002810190610f219190612204565b610f32906080810190606001611c28565b90505f89815b818110156110db57368d8d83818110610f5357610f536121d7565b9050602002810190610f659190612204565b9050610f94610f7a6060830160408401611c28565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610ff65750610ff6610fad6040830160208401611c28565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561100d575061100d610fad6020830183611c28565b8015611090575061109061102460a0830183612259565b611032916004915f916122c1565b61103b916122e8565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6110c6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516110d2908261134d565b50600101610f38565b505f90505b6110eb600185611c0a565b8110156111d3575f898983818110611105576111056121d7565b90506020028101906111179190612204565b611128906080810190606001611c28565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111ca5786828151811061116f5761116f6121d7565b602002602001015161118082610d19565b61118a9190611c0a565b92505f73ffffffffffffffffffffffffffffffffffffffff8216156111af575f6111b1565b865b905083156111c8576111c8828a6102b48488611c0a565b505b506001016110e0565b5050506112b5565b875f5b818110156112b257368b8b838181106111f9576111f96121d7565b905060200281019061120b9190612204565b9050611220610f7a6060830160408401611c28565b806112395750611239610fad6040830160208401611c28565b80156112505750611250610fad6020830183611c28565b8015611267575061126761102460a0830183612259565b61129d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516112a9908261134d565b506001016111de565b50505b50505050505050505050565b5f385f3884865af16105435763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c35576390b8ec185f526004601cfd5b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61136561135d6020830183611c28565b6017903b1190565b61139b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036113da576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6113ee610f7a6060850160408601611c28565b6113f8575f6113fe565b82608001355b90505f6114196114146080860160608701611c28565b610d19565b9050815f0361144f5761144f6114356060860160408701611c28565b6114456040870160208801611c28565b86608001356115c0565b5f8061145e6020870187611c28565b73ffffffffffffffffffffffffffffffffffffffff168461148260a0890189612259565b60405161149092919061234e565b5f6040518083038185875af1925050503d805f81146114ca576040519150601f19603f3d011682016040523d82523d5f602084013e6114cf565b606091505b5091509150816114e2576114e2816115ec565b5f6114f66114146080890160608a01611c28565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861152760208a018a611c28565b61153760608b0160408c01611c28565b61154760808c0160608d01611c28565b8b608001358987116115595786611563565b6115638a88611c0a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b6109f78383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6115f6565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84161561171d5773ffffffffffffffffffffffffffffffffffffffff831661165f576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156116d2573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116f69190611df1565b101561171d5761171d73ffffffffffffffffffffffffffffffffffffffff85168483611723565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c35575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610c3557633e3f8f735f526004601cfd5b5f60a082840312156117b1575f5ffd5b50919050565b5f5f604083850312156117c8575f5ffd5b823567ffffffffffffffff8111156117de575f5ffd5b830161014081860312156117f0575f5ffd5b9150602083013567ffffffffffffffff81111561180b575f5ffd5b611817858286016117a1565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561187257611872611821565b60405290565b6040805190810167ffffffffffffffff8111828210171561187257611872611821565b6040516080810167ffffffffffffffff8111828210171561187257611872611821565b60405160e0810167ffffffffffffffff8111828210171561187257611872611821565b6040516060810167ffffffffffffffff8111828210171561187257611872611821565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561194b5761194b611821565b604052919050565b5f67ffffffffffffffff82111561196c5761196c611821565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f8301126119a7575f5ffd5b8135602083015f6119bf6119ba84611953565b611904565b90508281528583830111156119d2575f5ffd5b828260208301375f92810160200192909252509392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611a0d575f5ffd5b50565b8035611a1b816119ec565b919050565b80358015158114611a1b575f5ffd5b5f6101408284031215611a40575f5ffd5b611a4861184e565b823581529050602082013567ffffffffffffffff811115611a67575f5ffd5b611a7384828501611998565b602083015250604082013567ffffffffffffffff811115611a92575f5ffd5b611a9e84828501611998565b604083015250611ab060608301611a10565b6060820152611ac160808301611a10565b6080820152611ad260a08301611a10565b60a082015260c0828101359082015260e08083013590820152611af86101008301611a20565b610100820152611b0b6101208301611a20565b61012082015292915050565b5f5f5f5f60608587031215611b2a575f5ffd5b843567ffffffffffffffff811115611b40575f5ffd5b611b4c87828801611a2f565b945050602085013567ffffffffffffffff811115611b68575f5ffd5b8501601f81018713611b78575f5ffd5b803567ffffffffffffffff811115611b8e575f5ffd5b8760208260051b8401011115611ba2575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611bc5575f5ffd5b611bd1878288016117a1565b91505092959194509250565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610d5d57610d5d611bdd565b5f610d5d3683611a2f565b5f60208284031215611c38575f5ffd5b8135611c43816119ec565b9392505050565b803563ffffffff81168114611a1b575f5ffd5b5f60408284031215611c6d575f5ffd5b611c75611878565b823581526020928301359281019290925250919050565b5f60a08236031215611c9c575f5ffd5b611ca461189b565b823561ffff81168114611cb5575f5ffd5b8152602083013567ffffffffffffffff811115611cd0575f5ffd5b830160e0368290031215611ce2575f5ffd5b611cea6118be565b611cf382611c4a565b8152602082810135908201526040808301359082015260608083013590820152608082013567ffffffffffffffff811115611d2c575f5ffd5b611d3836828501611998565b60808301525060a082013567ffffffffffffffff811115611d57575f5ffd5b611d6336828501611998565b60a08301525060c082013567ffffffffffffffff811115611d82575f5ffd5b611d8e36828501611998565b60c083015250602083015250611da73660408501611c5d565b6040820152611db860808401611a10565b606082015292915050565b5f60208284031215611dd3575f5ffd5b8151611c43816119ec565b80820180821115610d5d57610d5d611bdd565b5f60208284031215611e01575f5ffd5b5051919050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6080815263ffffffff8451166080820152602084015160a0820152604084015160c0820152606084015160e08201525f608085015160e0610100840152611e9f610160840182611e08565b905060a08601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8084830301610120850152611edb8282611e08565b91505060c08601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8084830301610140850152611f188282611e08565b92505050611f33602083018580518252602090810151910152565b73ffffffffffffffffffffffffffffffffffffffff83166060830152949350505050565b5f60408284031215611f67575f5ffd5b611f6f611878565b825181526020928301519281019290925250919050565b5f60408284031215611f96575f5ffd5b611f9e611878565b9050815168ffffffffffffffffff81168114611fb8575f5ffd5b8152602082015167ffffffffffffffff811115611fd3575f5ffd5b8201601f81018413611fe3575f5ffd5b8051611ff16119ba82611953565b818152856020838501011115612005575f5ffd5b8160208401602083015e5f6020838301015280602085015250505092915050565b5f5f5f83850360e0811215612039575f5ffd5b6080811215612046575f5ffd5b5061204f6118e1565b84518152602085015167ffffffffffffffff8116811461206d575f5ffd5b602082015261207f8660408701611f57565b604082015292506120938560808601611f57565b915060c084015167ffffffffffffffff8111156120ae575f5ffd5b6120ba86828701611f86565b9150509250925092565b60208152815160208201525f602083015161014060408401526120eb610160840182611e08565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526121268282611e08565b9150506060840151612150608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516121bf61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612236575f5ffd5b9190910192915050565b5f60208284031215612250575f5ffd5b611c4382611a20565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261228c575f5ffd5b83018035915067ffffffffffffffff8211156122a6575f5ffd5b6020019150368190038213156122ba575f5ffd5b9250929050565b5f5f858511156122cf575f5ffd5b838611156122db575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612347577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f910190815291905056fea264697066735822122075b62b7786b21d7c7d262defdba1ca4a4bc18b50ab52e87253bbcde2e04d78af64736f6c634300081d0033";
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
