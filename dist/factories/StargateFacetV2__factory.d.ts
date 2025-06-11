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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051612466380380612466833981016040819052602b91603b565b6001600160a01b03166080526066565b5f60208284031215604a575f5ffd5b81516001600160a01b0381168114605f575f5ffd5b9392505050565b6080516123e26100845f395f81816070015261069201526123e25ff3fe608060405260043610610033575f3560e01c806314d5307714610037578063a6010a661461004c578063fb214c2f1461005f575b5f5ffd5b61004a610045366004611806565b6100bb565b005b61004a61005a366004611b66565b6102c4565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611c59565b905061015185611c6c565b8061010001511561018e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61019786611c6c565b60a081015173ffffffffffffffffffffffffffffffffffffffff166101e8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610225576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610262576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61027f61027560a0890160808a01611c77565b8860c001356104b5565b61029961028b88611c6c565b61029488611cdb565b610569565b50479050818111156102b9576102b95f846102b48585611c59565b6109d2565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161033f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61034f3447611c59565b90508680610100015161038e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103b18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610425576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610462576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b885160c08a015161047b91908a8a3360408c0135610a07565b60c08a015261048d8961029488611cdb565b50479050818111156104a8576104a85f846102b48585611c59565b50505f9091555050505050565b805f036104ee576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105475780341015610543576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61054373ffffffffffffffffffffffffffffffffffffffff8316333084610b9d565b610120820151602082015160a001515115159015151415806105a0575081610120015180156105a05750602081015160c001515115155b156105d7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81610120015115801561062457508060200151602001515f1c73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b1561065b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516040517f5f6d9ae400000000000000000000000000000000000000000000000000000000815261ffff90911660048201525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f6d9ae4906024016020604051808303815f875af11580156106ed573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107119190611e12565b905073ffffffffffffffffffffffffffffffffffffffff811661076e5781516040517f420c482e00000000000000000000000000000000000000000000000000000000815261ffff90911660048201526024015b60405180910390fd5b604082015151608084015173ffffffffffffffffffffffffffffffffffffffff166107a95760c08401516107a29082611e2d565b90506108be565b60808401516040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff84811660248301525f919083169063dd62ed3e90604401602060405180830381865afa158015610821573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108459190611e40565b90508560c001518110156108bb57801561087a5761087a73ffffffffffffffffffffffffffffffffffffffff8316855f610bf5565b6108bb73ffffffffffffffffffffffffffffffffffffffff8316857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610bf5565b50505b60c08401516020840180516040908101929092525181850151606086015192517fcbef2aa900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86169363cbef2aa99386936109319391929091600401611ea3565b5f6040518083038185885af115801561094c573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109929190810190612075565b5050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516109c49190612113565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83166109fc576109f78282610c3e565b505050565b6109f7838383610cab565b5f83808203610a42576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610a50600185611c59565b818110610a5f57610a5f612226565b9050602002810190610a719190612253565b610a82906080810190606001611c77565b90505f610a8e82610d19565b905073ffffffffffffffffffffffffffffffffffffffff8216610ab857610ab53482611c59565b90505b5f610ac38989610d63565b9050610acf8989610e6d565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610b0a818b8b85610ed9565b5f83610b1586610d19565b610b1f9190611c59565b905073ffffffffffffffffffffffffffffffffffffffff8516610b4957610b468882611c59565b90505b8b811015610b8d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d905260248101829052604401610765565b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610be857637939f4245f526004601cfd5b5f60605260405250505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c3557633e3f8f735f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c8b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61054373ffffffffffffffffffffffffffffffffffffffff83168261127f565b73ffffffffffffffffffffffffffffffffffffffff8216610cf8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109f773ffffffffffffffffffffffffffffffffffffffff84168383611298565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d5b57610d5673ffffffffffffffffffffffffffffffffffffffff8316306112d8565b610d5d565b475b92915050565b6060815f8167ffffffffffffffff811115610d8057610d80611870565b604051908082528060200260200182016040528015610da9578160200160208202803683370190505b5090505f805b83811015610e6257868682818110610dc957610dc9612226565b9050602002810190610ddb9190612253565b610dec906080810190606001611c77565b9150610df782610d19565b838281518110610e0957610e09612226565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e5a5734838281518110610e4257610e42612226565b60200260200101818151610e569190611c59565b9052505b600101610daf565b509095945050505050565b5f5b818110156109f75736838383818110610e8a57610e8a612226565b9050602002810190610e9c9190612253565b9050610eae60e0820160c0830161228f565b15610ed057610ed0610ec66060830160408401611c77565b82608001356104b5565b50600101610e6f565b6020840151604085015184918491849083805f5b8181101561109057368b8b83818110610f0857610f08612226565b9050602002810190610f1a9190612253565b9050610f49610f2f6060830160408401611c77565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610fab5750610fab610f626040830160208401611c77565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610fc25750610fc2610f626020830183611c77565b80156110455750611045610fd960a08301836122a8565b610fe7916004915f91612310565b610ff091612337565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61107b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c51611087908261130b565b50600101610eed565b5050806001146111d8575f86866110a8600185611c59565b8181106110b7576110b7612226565b90506020028101906110c99190612253565b6110da906080810190606001611c77565b90505f805b6110ea600185611c59565b8110156111d4575f89898381811061110457611104612226565b90506020028101906111169190612253565b611127906080810190606001611c77565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111cb5786828151811061116e5761116e612226565b602002602001015161117f82610d19565b6111899190611c59565b92505f73ffffffffffffffffffffffffffffffffffffffff8216156111ae575f6111b0565b865b9050808411156111c9576111c9828a6102b48488611c59565b505b506001016110df565b5050505b5f5b81811015611272575f8787838181106111f5576111f5612226565b90506020028101906112079190612253565b611218906060810190604001611c77565b90505f61122482610d19565b90505f73ffffffffffffffffffffffffffffffffffffffff831615611249575f61124b565b855b9050808211156112645761126483896102b48486611c59565b8360010193505050506111da565b5050505050505050505050565b5f385f3884865af16105435763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c35576390b8ec185f526004601cfd5b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61132061131b6020830183611c77565b61157b565b611356576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611395576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6113a9610f2f6060850160408601611c77565b6113b3575f6113b9565b82608001355b90505f6113d46113cf6080860160608701611c77565b610d19565b9050815f0361140a5761140a6113f06060860160408701611c77565b6114006040870160208801611c77565b866080013561160f565b5f806114196020870187611c77565b73ffffffffffffffffffffffffffffffffffffffff168461143d60a08901896122a8565b60405161144b92919061239d565b5f6040518083038185875af1925050503d805f8114611485576040519150601f19603f3d011682016040523d82523d5f602084013e61148a565b606091505b50915091508161149d5761149d8161163b565b5f6114b16113cf6080890160608a01611c77565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886114e260208a018a611c77565b6114f260608b0160408c01611c77565b61150260808c0160608d01611c77565b8b60800135898711611514578661151e565b61151e8a88611c59565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161160657506023015160601c3b151592915050565b5050503b151590565b6109f78383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611645565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84161561176c5773ffffffffffffffffffffffffffffffffffffffff83166116ae576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611721573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117459190611e40565b101561176c5761176c73ffffffffffffffffffffffffffffffffffffffff85168483611772565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c35575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610c3557633e3f8f735f526004601cfd5b5f60a08284031215611800575f5ffd5b50919050565b5f5f60408385031215611817575f5ffd5b823567ffffffffffffffff81111561182d575f5ffd5b8301610140818603121561183f575f5ffd5b9150602083013567ffffffffffffffff81111561185a575f5ffd5b611866858286016117f0565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156118c1576118c1611870565b60405290565b6040805190810167ffffffffffffffff811182821017156118c1576118c1611870565b6040516080810167ffffffffffffffff811182821017156118c1576118c1611870565b60405160e0810167ffffffffffffffff811182821017156118c1576118c1611870565b6040516060810167ffffffffffffffff811182821017156118c1576118c1611870565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561199a5761199a611870565b604052919050565b5f67ffffffffffffffff8211156119bb576119bb611870565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f8301126119f6575f5ffd5b8135602083015f611a0e611a09846119a2565b611953565b9050828152858383011115611a21575f5ffd5b828260208301375f92810160200192909252509392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611a5c575f5ffd5b50565b8035611a6a81611a3b565b919050565b80358015158114611a6a575f5ffd5b5f6101408284031215611a8f575f5ffd5b611a9761189d565b823581529050602082013567ffffffffffffffff811115611ab6575f5ffd5b611ac2848285016119e7565b602083015250604082013567ffffffffffffffff811115611ae1575f5ffd5b611aed848285016119e7565b604083015250611aff60608301611a5f565b6060820152611b1060808301611a5f565b6080820152611b2160a08301611a5f565b60a082015260c0828101359082015260e08083013590820152611b476101008301611a6f565b610100820152611b5a6101208301611a6f565b61012082015292915050565b5f5f5f5f60608587031215611b79575f5ffd5b843567ffffffffffffffff811115611b8f575f5ffd5b611b9b87828801611a7e565b945050602085013567ffffffffffffffff811115611bb7575f5ffd5b8501601f81018713611bc7575f5ffd5b803567ffffffffffffffff811115611bdd575f5ffd5b8760208260051b8401011115611bf1575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611c14575f5ffd5b611c20878288016117f0565b91505092959194509250565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610d5d57610d5d611c2c565b5f610d5d3683611a7e565b5f60208284031215611c87575f5ffd5b8135611c9281611a3b565b9392505050565b803563ffffffff81168114611a6a575f5ffd5b5f60408284031215611cbc575f5ffd5b611cc46118c7565b823581526020928301359281019290925250919050565b5f60a08236031215611ceb575f5ffd5b611cf36118ea565b823561ffff81168114611d04575f5ffd5b8152602083013567ffffffffffffffff811115611d1f575f5ffd5b830160e0368290031215611d31575f5ffd5b611d3961190d565b611d4282611c99565b8152602082810135908201526040808301359082015260608083013590820152608082013567ffffffffffffffff811115611d7b575f5ffd5b611d87368285016119e7565b60808301525060a082013567ffffffffffffffff811115611da6575f5ffd5b611db2368285016119e7565b60a08301525060c082013567ffffffffffffffff811115611dd1575f5ffd5b611ddd368285016119e7565b60c083015250602083015250611df63660408501611cac565b6040820152611e0760808401611a5f565b606082015292915050565b5f60208284031215611e22575f5ffd5b8151611c9281611a3b565b80820180821115610d5d57610d5d611c2c565b5f60208284031215611e50575f5ffd5b5051919050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6080815263ffffffff8451166080820152602084015160a0820152604084015160c0820152606084015160e08201525f608085015160e0610100840152611eee610160840182611e57565b905060a08601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8084830301610120850152611f2a8282611e57565b91505060c08601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8084830301610140850152611f678282611e57565b92505050611f82602083018580518252602090810151910152565b73ffffffffffffffffffffffffffffffffffffffff83166060830152949350505050565b5f60408284031215611fb6575f5ffd5b611fbe6118c7565b825181526020928301519281019290925250919050565b5f60408284031215611fe5575f5ffd5b611fed6118c7565b9050815168ffffffffffffffffff81168114612007575f5ffd5b8152602082015167ffffffffffffffff811115612022575f5ffd5b8201601f81018413612032575f5ffd5b8051612040611a09826119a2565b818152856020838501011115612054575f5ffd5b8160208401602083015e5f6020838301015280602085015250505092915050565b5f5f5f83850360e0811215612088575f5ffd5b6080811215612095575f5ffd5b5061209e611930565b84518152602085015167ffffffffffffffff811681146120bc575f5ffd5b60208201526120ce8660408701611fa6565b604082015292506120e28560808601611fa6565b915060c084015167ffffffffffffffff8111156120fd575f5ffd5b61210986828701611fd5565b9150509250925092565b60208152815160208201525f6020830151610140604084015261213a610160840182611e57565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526121758282611e57565b915050606084015161219f608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161220e61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612285575f5ffd5b9190910192915050565b5f6020828403121561229f575f5ffd5b611c9282611a6f565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122db575f5ffd5b83018035915067ffffffffffffffff8211156122f5575f5ffd5b602001915036819003821315612309575f5ffd5b9250929050565b5f5f8585111561231e575f5ffd5b8386111561232a575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612396577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f910190815291905056fea26469706673582212205f4360b9063f69e598cc0dcafbeba61fc7c869c820034caf45f7c2a53aaefd6064736f6c634300081d0033";
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
