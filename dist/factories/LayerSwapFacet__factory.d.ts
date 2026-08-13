import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LayerSwapFacet, LayerSwapFacetInterface } from "../LayerSwapFacet";
type LayerSwapFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LayerSwapFacet__factory extends ContractFactory {
    constructor(...args: LayerSwapFacetConstructorParams);
    deploy(_layerSwapDepository: PromiseOrValue<string>, _backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LayerSwapFacet>;
    getDeployTransaction(_layerSwapDepository: PromiseOrValue<string>, _backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LayerSwapFacet;
    connect(signer: Signer): LayerSwapFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161249e38038061249e83398101604081905261002e9161009b565b6001600160a01b038216158061004b57506001600160a01b038116155b15610069576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b039182166080521660a0526100cc565b80516001600160a01b0381168114610096575f5ffd5b919050565b5f5f604083850312156100ac575f5ffd5b6100b583610080565b91506100c360208401610080565b90509250929050565b60805160a05161239d6101015f395f61096001525f8181605d01528181610c1401528181610cdc0152610d21015261239d5ff3fe608060405260043610610033575f3560e01c80634c279d6b14610037578063b48fae2f1461004c578063ee9e98e0146100a8575b5f5ffd5b61004a610045366004611ee8565b6100bb565b005b348015610057575f5ffd5b5061007f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004a6100b6366004611fae565b6103cd565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561014a6060830160408401612013565b5f6101553447612033565b905086806101000151610194576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101d2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101f58160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561022c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610269576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102a6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102af8761060f565b6102b98a886106a0565b8715801590610336575060808a015173ffffffffffffffffffffffffffffffffffffffff1689896102eb600182612033565b8181106102fa576102fa61206b565b905060200281019061030c9190612098565b61031d906080810190606001612013565b73ffffffffffffffffffffffffffffffffffffffff1614155b1561036d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b895160c08b015161039091908b8b61038b60608d0160408e01612013565b6109ea565b60c08b015261039f8a88610b2c565b5047915050818111156103c0576103c05f846103bb8585612033565b610eef565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610448576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561045c6060830160408401612013565b5f6104673447612033565b90508461048c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104c3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610500576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361053d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561057b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156105b9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105c28761060f565b6105cc88886106a0565b6105de88608001518960c00151610f24565b6105e88888610b2c565b504791505081811115610604576106045f846103bb8585612033565b50505f909155505050565b5f6106206040830160208401612013565b73ffffffffffffffffffffffffffffffffffffffff16148061066657505f61064e6060830160408401612013565b73ffffffffffffffffffffffffffffffffffffffff16145b1561069d576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b8060a001354211156106de576040517f0819bdcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815160c083015160a08401515f927f3368de299775fb99a682a6178a8d9bdc9a7c2b4f1344f296730f79168d57833592909185356107226040880160208901612013565b6107326060890160408a01612013565b60e0808b01516080808d015160408051602081019c909c528b019990995260608a81019890985273ffffffffffffffffffffffffffffffffffffffff968716908a015260a08981019590955292851660c08901529084169087015292870135610100860152610120850192909252909116610140830152830135610160820152610180016040516020818303038152906040528051906020012090505f6108d2604080518082018252601581527f4c492e4649204c6179657253776170204661636574000000000000000000000060209182015281518083018352600181527f31000000000000000000000000000000000000000000000000000000000000009082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f61eb1883172c2dbb1ba48af163b3817ca0c5cb29a143a4098122bbc9fb23c8cc818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281019190915260428101839052606201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012090505f61095c8261095760808701876120d4565b610fd8565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146109e3576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b5f82808203610a25576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610a33600185612033565b818110610a4257610a4261206b565b9050602002810190610a549190612098565b610a65906080810190606001612013565b90505f610a7182611078565b905073ffffffffffffffffffffffffffffffffffffffff8216610a9b57610a983482612033565b90505b5f610aa688886110c2565b9050610ab288886111cc565b610abf8a89898985611238565b5f82610aca85611078565b610ad49190612033565b905089811015610b1e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b80355f9081527fe7f6f1ea398f71bfab05d07c2378c6e6f3bfc564ae8f7fdd750db5c5b212554c602081905260409091205460ff1615610b98576040517fa6bc74c400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81355f90815260208290526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556080830151610bf39073ffffffffffffffffffffffffffffffffffffffff161590565b15610cd25760c083015173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906380a6de92908435610c4d6040870160208801612013565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019290925273ffffffffffffffffffffffffffffffffffffffff1660248201526044015f604051808303818588803b158015610cb6575f5ffd5b505af1158015610cc8573d5f5f3e3d5ffd5b5050505050610dee565b610d0583608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151611480565b608083015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063f4371f6390843590610d5b6040870160208801612013565b60c08801516040517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b168152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501529116604483015260648201526084015f604051808303815f87803b158015610dd7575f5ffd5b505af1158015610de9573d5f5f3e3d5ffd5b505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610eb3576060820135610e74576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e08301518351604051606085013581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610ee29190612188565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f1957610f1482826114ac565b505050565b610f14838383611519565b805f03610f5d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610fb65780341015610fb2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610fb273ffffffffffffffffffffffffffffffffffffffff8316333084611587565b6040515f8490526001906040830361102a5760208481013560ff81901c601b0190915284356040527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1660605261104b565b604183036110475760408401355f1a60205260408460403761104b565b5f91505b6020600160805f855afa5191503d61106a57638baa579f5f526004601cfd5b5f6060526040529392505050565b5f73ffffffffffffffffffffffffffffffffffffffff8216156110ba576110b573ffffffffffffffffffffffffffffffffffffffff8316306115df565b6110bc565b475b92915050565b6060815f8167ffffffffffffffff8111156110df576110df611cb3565b604051908082528060200260200182016040528015611108578160200160208202803683370190505b5090505f5f5b838110156111c1578686828181106111285761112861206b565b905060200281019061113a9190612098565b61114b906080810190606001612013565b915061115682611078565b8382815181106111685761116861206b565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166111b957348382815181106111a1576111a161206b565b602002602001018181516111b59190612033565b9052505b60010161110e565b509095945050505050565b5f5b81811015610f1457368383838181106111e9576111e961206b565b90506020028101906111fb9190612098565b905061120d60e0820160c0830161229b565b1561122f5761122f6112256060830160408401612013565b8260800135610f24565b506001016111ce565b83838383825f80805b8381101561146457368c8c8381811061125c5761125c61206b565b905060200281019061126e9190612098565b905061127d6020820182612013565b935061128f6040820160208301612013565b9250611332846112a260a08401846120d4565b6112b0916004915f916122b4565b6112b9916122db565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061141a575061136661134c6060830160408401612013565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561139f57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b801561141a575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15611451576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61145b8e82611612565b50600101611241565b50505050611475848484845f611885565b505050505050505050565b610f148383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a9c565b73ffffffffffffffffffffffffffffffffffffffff82166114f9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fb273ffffffffffffffffffffffffffffffffffffffff831682611bc9565b73ffffffffffffffffffffffffffffffffffffffff8216611566576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f1473ffffffffffffffffffffffffffffffffffffffff84168383611be2565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166115d257637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61162a6116226020830183612013565b6017903b1190565b611660576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361169f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6116b361134c6060850160408601612013565b6116bd575f6116c3565b82608001355b90505f6116de6116d96080860160608701612013565b611078565b9050815f03611714576117146116fa6060860160408701612013565b61170a6040870160208801612013565b8660800135611480565b5f806117236020870187612013565b73ffffffffffffffffffffffffffffffffffffffff168461174760a08901896120d4565b604051611755929190612341565b5f6040518083038185875af1925050503d805f811461178f576040519150601f19603f3d011682016040523d82523d5f602084013e611794565b606091505b5091509150816117a7576117a781611c2b565b5f6117bb6116d96080890160608a01612013565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886117ec60208a018a612013565b6117fc60608b0160408c01612013565b61180c60808c0160608d01612013565b8b6080013589871161181e5786611828565b6118288a88612033565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611894600182612033565b8181106118a3576118a361206b565b90506020028101906118b59190612098565b6118c6906080810190606001612013565b90505f5f5f5f5f5f5f5b88811015611a8c576118e360018a612033565b811080156118f2575088600114155b156119cd578d8d828181106119095761190961206b565b905060200281019061191b9190612098565b61192c906080810190606001612013565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146119cd578a81815181106119735761197361206b565b602002602001015161198487611078565b61198e9190612033565b965073ffffffffffffffffffffffffffffffffffffffff8616156119b2575f6119b4565b895b9350838711156119cd576119cd868d6103bb878b612033565b8d8d828181106119df576119df61206b565b90506020028101906119f19190612098565b611a02906060810190604001612013565b9450611a0d85611078565b925073ffffffffffffffffffffffffffffffffffffffff851615611a31575f611a33565b895b91508183118015611a7057508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611a8457611a84858d6103bb8587612033565b6001016118d0565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611bc35773ffffffffffffffffffffffffffffffffffffffff8316611b05576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611b78573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b9c9190612350565b1015611bc357611bc373ffffffffffffffffffffffffffffffffffffffff85168483611c35565b50505050565b5f385f3884865af1610fb25763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c22576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c22575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611c2257633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611d0457611d04611cb3565b60405290565b5f82601f830112611d19575f5ffd5b813567ffffffffffffffff811115611d3357611d33611cb3565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611d8057611d80611cb3565b604052818152838201602001851015611d97575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611dd6575f5ffd5b919050565b80358015158114611dd6575f5ffd5b5f6101408284031215611dfb575f5ffd5b611e03611ce0565b823581529050602082013567ffffffffffffffff811115611e22575f5ffd5b611e2e84828501611d0a565b602083015250604082013567ffffffffffffffff811115611e4d575f5ffd5b611e5984828501611d0a565b604083015250611e6b60608301611db3565b6060820152611e7c60808301611db3565b6080820152611e8d60a08301611db3565b60a082015260c0828101359082015260e08083013590820152611eb36101008301611ddb565b610100820152611ec66101208301611ddb565b61012082015292915050565b5f60c08284031215611ee2575f5ffd5b50919050565b5f5f5f5f60608587031215611efb575f5ffd5b843567ffffffffffffffff811115611f11575f5ffd5b611f1d87828801611dea565b945050602085013567ffffffffffffffff811115611f39575f5ffd5b8501601f81018713611f49575f5ffd5b803567ffffffffffffffff811115611f5f575f5ffd5b8760208260051b8401011115611f73575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611f96575f5ffd5b611fa287828801611ed2565b91505092959194509250565b5f5f60408385031215611fbf575f5ffd5b823567ffffffffffffffff811115611fd5575f5ffd5b611fe185828601611dea565b925050602083013567ffffffffffffffff811115611ffd575f5ffd5b61200985828601611ed2565b9150509250929050565b5f60208284031215612023575f5ffd5b61202c82611db3565b9392505050565b818103818111156110bc577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126120ca575f5ffd5b9190910192915050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612107575f5ffd5b83018035915067ffffffffffffffff821115612121575f5ffd5b602001915036819003821315612135575f5ffd5b9250929050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526121af61016084018261213c565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526121ea828261213c565b9150506060840151612214608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161228361012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156122ab575f5ffd5b61202c82611ddb565b5f5f858511156122c2575f5ffd5b838611156122ce575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561233a577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612360575f5ffd5b505191905056fea264697066735822122084ba150cf480cda214deb641df59ae8e044caec4b0ea354c4ea6a58c71a61f4264736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_layerSwapDepository";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_backendSigner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "LAYERSWAP_DEPOSITORY";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaLayerSwap";
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
            readonly name: "_layerSwapData";
            readonly type: "tuple";
            readonly internalType: "struct LayerSwapFacet.LayerSwapData";
            readonly components: readonly [{
                readonly name: "requestId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositoryReceiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaLayerSwap";
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
            readonly name: "_layerSwapData";
            readonly type: "tuple";
            readonly internalType: "struct LayerSwapFacet.LayerSwapData";
            readonly components: readonly [{
                readonly name: "requestId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositoryReceiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        readonly name: "InvalidCallData";
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
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSignature";
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
        readonly name: "RequestAlreadyProcessed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SignatureExpired";
        readonly inputs: readonly [];
    }];
    static createInterface(): LayerSwapFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LayerSwapFacet;
}
export {};
