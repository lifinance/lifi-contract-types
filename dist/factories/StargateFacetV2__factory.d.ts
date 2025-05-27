import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { StargateFacetV2, StargateFacetV2Interface } from "../StargateFacetV2";
declare type StargateFacetV2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051612477380380612477833981016040819052602b91603b565b6001600160a01b03166080526066565b5f60208284031215604a575f5ffd5b81516001600160a01b0381168114605f575f5ffd5b9392505050565b6080516123f36100845f395f81816070015261069201526123f35ff3fe608060405260043610610033575f3560e01c806314d5307714610037578063a6010a661461004c578063fb214c2f1461005f575b5f5ffd5b61004a610045366004611817565b6100bb565b005b61004a61005a366004611b77565b6102c4565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611c6a565b905061015185611c7d565b8061010001511561018e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61019786611c7d565b60a081015173ffffffffffffffffffffffffffffffffffffffff166101e8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610225576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610262576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61027f61027560a0890160808a01611c88565b8860c001356104b5565b61029961028b88611c7d565b61029488611cec565b610569565b50479050818111156102b9576102b95f846102b48585611c6a565b6109d2565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161033f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61034f3447611c6a565b90508680610100015161038e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103b18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610425576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610462576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b885160c08a015161047b91908a8a3360408c0135610a07565b60c08a015261048d8961029488611cec565b50479050818111156104a8576104a85f846102b48585611c6a565b50505f9091555050505050565b805f036104ee576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105475780341015610543576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61054373ffffffffffffffffffffffffffffffffffffffff8316333084610b9d565b610120820151602082015160a001515115159015151415806105a0575081610120015180156105a05750602081015160c001515115155b156105d7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81610120015115801561062457508060200151602001515f1c73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b1561065b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516040517f5f6d9ae400000000000000000000000000000000000000000000000000000000815261ffff90911660048201525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f6d9ae4906024016020604051808303815f875af11580156106ed573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107119190611e23565b905073ffffffffffffffffffffffffffffffffffffffff811661076e5781516040517f420c482e00000000000000000000000000000000000000000000000000000000815261ffff90911660048201526024015b60405180910390fd5b604082015151608084015173ffffffffffffffffffffffffffffffffffffffff166107a95760c08401516107a29082611e3e565b90506108be565b60808401516040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff84811660248301525f919083169063dd62ed3e90604401602060405180830381865afa158015610821573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108459190611e51565b90508560c001518110156108bb57801561087a5761087a73ffffffffffffffffffffffffffffffffffffffff8316855f610bf5565b6108bb73ffffffffffffffffffffffffffffffffffffffff8316857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610bf5565b50505b60c08401516020840180516040908101929092525181850151606086015192517fcbef2aa900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86169363cbef2aa99386936109319391929091600401611eb4565b5f6040518083038185885af115801561094c573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109929190810190612086565b5050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516109c49190612124565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83166109fc576109f78282610c3e565b505050565b6109f7838383610cab565b5f83808203610a42576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610a50600185611c6a565b818110610a5f57610a5f612237565b9050602002810190610a719190612264565b610a82906080810190606001611c88565b90505f610a8e82610d19565b905073ffffffffffffffffffffffffffffffffffffffff8216610ab857610ab53482611c6a565b90505b5f610ac38989610d63565b9050610acf8989610e6d565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610b0a818b8b85610ed9565b5f83610b1586610d19565b610b1f9190611c6a565b905073ffffffffffffffffffffffffffffffffffffffff8516610b4957610b468882611c6a565b90505b8b811015610b8d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d905260248101829052604401610765565b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610be857637939f4245f526004601cfd5b5f60605260405250505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c3557633e3f8f735f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c8b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61054373ffffffffffffffffffffffffffffffffffffffff8316826112c1565b73ffffffffffffffffffffffffffffffffffffffff8216610cf8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109f773ffffffffffffffffffffffffffffffffffffffff841683836112da565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d5b57610d5673ffffffffffffffffffffffffffffffffffffffff83163061131a565b610d5d565b475b92915050565b6060815f8167ffffffffffffffff811115610d8057610d80611881565b604051908082528060200260200182016040528015610da9578160200160208202803683370190505b5090505f805b83811015610e6257868682818110610dc957610dc9612237565b9050602002810190610ddb9190612264565b610dec906080810190606001611c88565b9150610df782610d19565b838281518110610e0957610e09612237565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e5a5734838281518110610e4257610e42612237565b60200260200101818151610e569190611c6a565b9052505b600101610daf565b509095945050505050565b5f5b818110156109f75736838383818110610e8a57610e8a612237565b9050602002810190610e9c9190612264565b9050610eae60e0820160c083016122a0565b15610ed057610ed0610ec66060830160408401611c88565b82608001356104b5565b50600101610e6f565b6020840151604085015184918491849083600181146111db575f8686610f00600185611c6a565b818110610f0f57610f0f612237565b9050602002810190610f219190612264565b610f32906080810190606001611c88565b90505f89815b818110156110db57368d8d83818110610f5357610f53612237565b9050602002810190610f659190612264565b9050610f94610f7a6060830160408401611c88565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610ff65750610ff6610fad6040830160208401611c88565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561100d575061100d610fad6020830183611c88565b8015611090575061109061102460a08301836122b9565b611032916004915f91612321565b61103b91612348565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6110c6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516110d2908261134d565b50600101610f38565b505f90505b6110eb600185611c6a565b8110156111d3575f89898381811061110557611105612237565b90506020028101906111179190612264565b611128906080810190606001611c88565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111ca5786828151811061116f5761116f612237565b602002602001015161118082610d19565b61118a9190611c6a565b92505f73ffffffffffffffffffffffffffffffffffffffff8216156111af575f6111b1565b865b905083156111c8576111c8828a6102b48488611c6a565b505b506001016110e0565b5050506112b5565b875f5b818110156112b257368b8b838181106111f9576111f9612237565b905060200281019061120b9190612264565b9050611220610f7a6060830160408401611c88565b806112395750611239610fad6040830160208401611c88565b80156112505750611250610fad6020830183611c88565b8015611267575061126761102460a08301836122b9565b61129d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516112a9908261134d565b506001016111de565b50505b50505050505050505050565b5f385f3884865af16105435763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c35576390b8ec185f526004601cfd5b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61136361135d6020830183611c88565b3b151590565b611399576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036113d8576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6113ec610f7a6060850160408601611c88565b6113f6575f6113fc565b82608001355b90505f6114176114126060860160408701611c88565b610d19565b90505f61142d6114126080870160608801611c88565b9050825f03611463576114636114496060870160408801611c88565b6114596040880160208901611c88565b8760800135611620565b84608001358210156114ae576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610765565b5f806114bd6020880188611c88565b73ffffffffffffffffffffffffffffffffffffffff16856114e160a08a018a6122b9565b6040516114ef9291906123ae565b5f6040518083038185875af1925050503d805f8114611529576040519150601f19603f3d011682016040523d82523d5f602084013e61152e565b606091505b509150915081611541576115418161164c565b5f61155561141260808a0160608b01611c88565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961158660208b018b611c88565b61159660608c0160408d01611c88565b6115a660808d0160608e01611c88565b8c608001358987116115b857866115c2565b6115c28a88611c6a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6109f78383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611656565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84161561177d5773ffffffffffffffffffffffffffffffffffffffff83166116bf576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611732573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117569190611e51565b101561177d5761177d73ffffffffffffffffffffffffffffffffffffffff85168483611783565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c35575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610c3557633e3f8f735f526004601cfd5b5f60a08284031215611811575f5ffd5b50919050565b5f5f60408385031215611828575f5ffd5b823567ffffffffffffffff81111561183e575f5ffd5b83016101408186031215611850575f5ffd5b9150602083013567ffffffffffffffff81111561186b575f5ffd5b61187785828601611801565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156118d2576118d2611881565b60405290565b6040805190810167ffffffffffffffff811182821017156118d2576118d2611881565b6040516080810167ffffffffffffffff811182821017156118d2576118d2611881565b60405160e0810167ffffffffffffffff811182821017156118d2576118d2611881565b6040516060810167ffffffffffffffff811182821017156118d2576118d2611881565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156119ab576119ab611881565b604052919050565b5f67ffffffffffffffff8211156119cc576119cc611881565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f830112611a07575f5ffd5b8135602083015f611a1f611a1a846119b3565b611964565b9050828152858383011115611a32575f5ffd5b828260208301375f92810160200192909252509392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611a6d575f5ffd5b50565b8035611a7b81611a4c565b919050565b80358015158114611a7b575f5ffd5b5f6101408284031215611aa0575f5ffd5b611aa86118ae565b823581529050602082013567ffffffffffffffff811115611ac7575f5ffd5b611ad3848285016119f8565b602083015250604082013567ffffffffffffffff811115611af2575f5ffd5b611afe848285016119f8565b604083015250611b1060608301611a70565b6060820152611b2160808301611a70565b6080820152611b3260a08301611a70565b60a082015260c0828101359082015260e08083013590820152611b586101008301611a80565b610100820152611b6b6101208301611a80565b61012082015292915050565b5f5f5f5f60608587031215611b8a575f5ffd5b843567ffffffffffffffff811115611ba0575f5ffd5b611bac87828801611a8f565b945050602085013567ffffffffffffffff811115611bc8575f5ffd5b8501601f81018713611bd8575f5ffd5b803567ffffffffffffffff811115611bee575f5ffd5b8760208260051b8401011115611c02575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611c25575f5ffd5b611c3187828801611801565b91505092959194509250565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610d5d57610d5d611c3d565b5f610d5d3683611a8f565b5f60208284031215611c98575f5ffd5b8135611ca381611a4c565b9392505050565b803563ffffffff81168114611a7b575f5ffd5b5f60408284031215611ccd575f5ffd5b611cd56118d8565b823581526020928301359281019290925250919050565b5f60a08236031215611cfc575f5ffd5b611d046118fb565b823561ffff81168114611d15575f5ffd5b8152602083013567ffffffffffffffff811115611d30575f5ffd5b830160e0368290031215611d42575f5ffd5b611d4a61191e565b611d5382611caa565b8152602082810135908201526040808301359082015260608083013590820152608082013567ffffffffffffffff811115611d8c575f5ffd5b611d98368285016119f8565b60808301525060a082013567ffffffffffffffff811115611db7575f5ffd5b611dc3368285016119f8565b60a08301525060c082013567ffffffffffffffff811115611de2575f5ffd5b611dee368285016119f8565b60c083015250602083015250611e073660408501611cbd565b6040820152611e1860808401611a70565b606082015292915050565b5f60208284031215611e33575f5ffd5b8151611ca381611a4c565b80820180821115610d5d57610d5d611c3d565b5f60208284031215611e61575f5ffd5b5051919050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6080815263ffffffff8451166080820152602084015160a0820152604084015160c0820152606084015160e08201525f608085015160e0610100840152611eff610160840182611e68565b905060a08601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8084830301610120850152611f3b8282611e68565b91505060c08601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8084830301610140850152611f788282611e68565b92505050611f93602083018580518252602090810151910152565b73ffffffffffffffffffffffffffffffffffffffff83166060830152949350505050565b5f60408284031215611fc7575f5ffd5b611fcf6118d8565b825181526020928301519281019290925250919050565b5f60408284031215611ff6575f5ffd5b611ffe6118d8565b9050815168ffffffffffffffffff81168114612018575f5ffd5b8152602082015167ffffffffffffffff811115612033575f5ffd5b8201601f81018413612043575f5ffd5b8051612051611a1a826119b3565b818152856020838501011115612065575f5ffd5b8160208401602083015e5f6020838301015280602085015250505092915050565b5f5f5f83850360e0811215612099575f5ffd5b60808112156120a6575f5ffd5b506120af611941565b84518152602085015167ffffffffffffffff811681146120cd575f5ffd5b60208201526120df8660408701611fb7565b604082015292506120f38560808601611fb7565b915060c084015167ffffffffffffffff81111561210e575f5ffd5b61211a86828701611fe6565b9150509250925092565b60208152815160208201525f6020830151610140604084015261214b610160840182611e68565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526121868282611e68565b91505060608401516121b0608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161221f61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612296575f5ffd5b9190910192915050565b5f602082840312156122b0575f5ffd5b611ca382611a80565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122ec575f5ffd5b83018035915067ffffffffffffffff821115612306575f5ffd5b60200191503681900382131561231a575f5ffd5b9250929050565b5f5f8585111561232f575f5ffd5b8386111561233b575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156123a7577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f910190815291905056fea2646970667358221220e9dd268f2a5a86b1beab03c6c74cd0148716b20b8ed66104808b7523b945a1ef64736f6c634300081d0033";
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
