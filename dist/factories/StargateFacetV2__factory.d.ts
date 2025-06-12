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
    static readonly bytecode = "0x60a060405234801561001057600080fd5b506040516200250a3803806200250a83398101604081905261003191610042565b6001600160a01b0316608052610072565b60006020828403121561005457600080fd5b81516001600160a01b038116811461006b57600080fd5b9392505050565b6080516124766200009460003960008181607301526106a001526124766000f3fe6080604052600436106100345760003560e01c806314d5307714610039578063a6010a661461004e578063fb214c2f14610061575b600080fd5b61004c6100473660046118a4565b6100be565b005b61004c61005c366004611be8565b6102cb565b34801561006d57600080fd5b506100957f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447611cd6565b905061015585611ce9565b80610100015115610192576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61019b86611ce9565b60a081015173ffffffffffffffffffffffffffffffffffffffff166101ec576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361022a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610267576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61028461027a60a0890160808a01611cf5565b8860c001356104c0565b61029e61029088611ce9565b61029988611d5d565b610575565b50479050818111156102bf576102bf6000846102ba8585611cd6565b6109eb565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610346576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103573447611cd6565b905086806101000151610396576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103b98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103f0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361042e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361046b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b885160c08a015161048491908a8a3360408c0135610a20565b60c08a01526104968961029988611d5d565b50479050818111156104b2576104b26000846102ba8585611cd6565b505060009091555050505050565b806000036104fa576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610553578034101561054f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61054f73ffffffffffffffffffffffffffffffffffffffff8316333084610bbb565b610120820151602082015160a001515115159015151415806105ac575081610120015180156105ac5750602081015160c001515115155b156105e3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b816101200151158015610631575080602001516020015160001c73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b15610668576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516040517f5f6d9ae400000000000000000000000000000000000000000000000000000000815261ffff90911660048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f6d9ae4906024016020604051808303816000875af11580156106fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107229190611e89565b905073ffffffffffffffffffffffffffffffffffffffff811661077f5781516040517f420c482e00000000000000000000000000000000000000000000000000000000815261ffff90911660048201526024015b60405180910390fd5b604082015151608084015173ffffffffffffffffffffffffffffffffffffffff166107ba5760c08401516107b39082611ea6565b90506108d3565b60808401516040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff84811660248301526000919083169063dd62ed3e90604401602060405180830381865afa158015610835573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108599190611eb9565b90508560c001518110156108d057801561088f5761088f73ffffffffffffffffffffffffffffffffffffffff8316856000610c18565b6108d073ffffffffffffffffffffffffffffffffffffffff8316857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610c18565b50505b60c08401516020840180516040908101929092525181850151606086015192517fcbef2aa900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86169363cbef2aa99386936109469391929091600401611f40565b60006040518083038185885af1158015610964573d6000803e3d6000fd5b50505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109ab91908101906120fb565b5050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516109dd91906121b7565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a1557610a108282610c67565b505050565b610a10838383610cd4565b600083808203610a5c576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610a6b600185611cd6565b818110610a7a57610a7a6122ca565b9050602002810190610a8c91906122f9565b610a9d906080810190606001611cf5565b90506000610aaa82610d42565b905073ffffffffffffffffffffffffffffffffffffffff8216610ad457610ad13482611cd6565b90505b6000610ae08989610d8d565b9050610aec8989610e99565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610b27818b8b85610f06565b600083610b3386610d42565b610b3d9190611cd6565b905073ffffffffffffffffffffffffffffffffffffffff8516610b6757610b648882611cd6565b90505b8b811015610bab576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d905260248101829052604401610776565b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610c0a57637939f4246000526004601cfd5b600060605260405250505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716610c5d57633e3f8f736000526004601cfd5b6000603452505050565b73ffffffffffffffffffffffffffffffffffffffff8216610cb4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61054f73ffffffffffffffffffffffffffffffffffffffff8316826112f7565b73ffffffffffffffffffffffffffffffffffffffff8216610d21576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a1073ffffffffffffffffffffffffffffffffffffffff84168383611313565b600073ffffffffffffffffffffffffffffffffffffffff821615610d8557610d8073ffffffffffffffffffffffffffffffffffffffff831630611358565b610d87565b475b92915050565b60608160008167ffffffffffffffff811115610dab57610dab611911565b604051908082528060200260200182016040528015610dd4578160200160208202803683370190505b5090506000805b83811015610e8e57868682818110610df557610df56122ca565b9050602002810190610e0791906122f9565b610e18906080810190606001611cf5565b9150610e2382610d42565b838281518110610e3557610e356122ca565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e865734838281518110610e6e57610e6e6122ca565b60200260200101818151610e829190611cd6565b9052505b600101610ddb565b509095945050505050565b60005b81811015610a105736838383818110610eb757610eb76122ca565b9050602002810190610ec991906122f9565b9050610edb60e0820160c08301612337565b15610efd57610efd610ef36060830160408401611cf5565b82608001356104c0565b50600101610e9c565b6020840151604085015184918491849083600181146112105760008686610f2e600185611cd6565b818110610f3d57610f3d6122ca565b9050602002810190610f4f91906122f9565b610f60906080810190606001611cf5565b9050600089815b8181101561110d57368d8d83818110610f8257610f826122ca565b9050602002810190610f9491906122f9565b9050610fc3610fa96060830160408401611cf5565b73ffffffffffffffffffffffffffffffffffffffff161590565b806110265750611026610fdc6040830160208401611cf5565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561103d575061103d610fdc6020830183611cf5565b80156110c257506110c261105460a0830183612352565b611063916004916000916123be565b61106c916123e8565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6110f8576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51611104908261138d565b50600101610f67565b505060005b61111d600185611cd6565b811015611208576000898983818110611138576111386122ca565b905060200281019061114a91906122f9565b61115b906080810190606001611cf5565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111ff578682815181106111a2576111a26122ca565b60200260200101516111b382610d42565b6111bd9190611cd6565b9250600073ffffffffffffffffffffffffffffffffffffffff8216156111e45760006111e6565b865b905083156111fd576111fd828a6102ba8488611cd6565b505b50600101611112565b5050506112eb565b8760005b818110156112e857368b8b8381811061122f5761122f6122ca565b905060200281019061124191906122f9565b9050611256610fa96060830160408401611cf5565b8061126f575061126f610fdc6040830160208401611cf5565b80156112865750611286610fdc6020830183611cf5565b801561129d575061129d61105460a0830183612352565b6112d3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516112df908261138d565b50600101611214565b50505b50505050505050505050565b60003860003884865af161054f5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610c5d576390b8ec186000526004601cfd5b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6113a261139d6020830183611cf5565b611607565b6113d8576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611418576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061142d610fa96060850160408601611cf5565b61143857600061143e565b82608001355b9050600061145a6114556080860160608701611cf5565b610d42565b905081600003611491576114916114776060860160408701611cf5565b6114876040870160208801611cf5565b866080013561169d565b6000806114a16020870187611cf5565b73ffffffffffffffffffffffffffffffffffffffff16846114c560a0890189612352565b6040516114d3929190612430565b60006040518083038185875af1925050503d8060008114611510576040519150601f19603f3d011682016040523d82523d6000602084013e611515565b606091505b50915091508161152857611528816116c9565b600061153d6114556080890160608a01611cf5565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861156e60208a018a611cf5565b61157e60608b0160408c01611cf5565b61158e60808c0160608d01611cf5565b8b608001358987116115a057866115aa565b6115aa8a88611cd6565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b6040805160178082528183019092526000918291906020820181803683370190505090506017600060208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161169457506023015160601c3b151592915050565b5050503b151590565b610a108383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116d3565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156117fc5773ffffffffffffffffffffffffffffffffffffffff831661173c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156117b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117d59190611eb9565b10156117fc576117fc73ffffffffffffffffffffffffffffffffffffffff85168483611802565b50505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716610c5d5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716610c5d57633e3f8f736000526004601cfd5b600060a0828403121561189e57600080fd5b50919050565b600080604083850312156118b757600080fd5b823567ffffffffffffffff808211156118cf57600080fd5b9084019061014082870312156118e457600080fd5b909250602084013590808211156118fa57600080fd5b506119078582860161188c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561196457611964611911565b60405290565b6040805190810167ffffffffffffffff8111828210171561196457611964611911565b6040516080810167ffffffffffffffff8111828210171561196457611964611911565b60405160e0810167ffffffffffffffff8111828210171561196457611964611911565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a1a57611a1a611911565b604052919050565b600067ffffffffffffffff821115611a3c57611a3c611911565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611a7957600080fd5b8135611a8c611a8782611a22565b6119d3565b818152846020838601011115611aa157600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611ae057600080fd5b50565b8035611aee81611abe565b919050565b80358015158114611aee57600080fd5b60006101408284031215611b1657600080fd5b611b1e611940565b905081358152602082013567ffffffffffffffff80821115611b3f57600080fd5b611b4b85838601611a68565b60208401526040840135915080821115611b6457600080fd5b50611b7184828501611a68565b604083015250611b8360608301611ae3565b6060820152611b9460808301611ae3565b6080820152611ba560a08301611ae3565b60a082015260c082013560c082015260e082013560e0820152610100611bcc818401611af3565b90820152610120611bde838201611af3565b9082015292915050565b60008060008060608587031215611bfe57600080fd5b843567ffffffffffffffff80821115611c1657600080fd5b611c2288838901611b03565b95506020870135915080821115611c3857600080fd5b818701915087601f830112611c4c57600080fd5b813581811115611c5b57600080fd5b8860208260051b8501011115611c7057600080fd5b602083019550809450506040870135915080821115611c8e57600080fd5b50611c9b8782880161188c565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610d8757610d87611ca7565b6000610d873683611b03565b600060208284031215611d0757600080fd5b8135611d1281611abe565b9392505050565b803563ffffffff81168114611aee57600080fd5b600060408284031215611d3f57600080fd5b611d4761196a565b9050813581526020820135602082015292915050565b600060a08236031215611d6f57600080fd5b611d7761198d565b823561ffff81168114611d8957600080fd5b8152602083013567ffffffffffffffff80821115611da657600080fd5b818501915060e08236031215611dbb57600080fd5b611dc36119b0565b611dcc83611d19565b8152602083013560208201526040830135604082015260608301356060820152608083013582811115611dfe57600080fd5b611e0a36828601611a68565b60808301525060a083013582811115611e2257600080fd5b611e2e36828601611a68565b60a08301525060c083013582811115611e4657600080fd5b611e5236828601611a68565b60c083015250602084015250611e6d90503660408501611d2d565b6040820152611e7e60808401611ae3565b606082015292915050565b600060208284031215611e9b57600080fd5b8151611d1281611abe565b80820180821115610d8757610d87611ca7565b600060208284031215611ecb57600080fd5b5051919050565b60005b83811015611eed578181015183820152602001611ed5565b50506000910152565b60008151808452611f0e816020860160208601611ed2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6080815263ffffffff8451166080820152602084015160a0820152604084015160c0820152606084015160e08201526000608085015160e0610100840152611f8c610160840182611ef6565b905060a08601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808085840301610120860152611fc98383611ef6565b925060c08801519150808584030161014086015250611fe88282611ef6565b92505050612003602083018580518252602090810151910152565b73ffffffffffffffffffffffffffffffffffffffff83166060830152949350505050565b60006040828403121561203957600080fd5b61204161196a565b9050815181526020820151602082015292915050565b60006040828403121561206957600080fd5b61207161196a565b9050815168ffffffffffffffffff8116811461208c57600080fd5b8152602082015167ffffffffffffffff8111156120a857600080fd5b8201601f810184136120b957600080fd5b80516120c7611a8782611a22565b8181528560208385010111156120dc57600080fd5b6120ed826020830160208601611ed2565b602084015250909392505050565b600080600083850360e081121561211157600080fd5b608081121561211f57600080fd5b506040516060810167ffffffffffffffff828210818311171561214457612144611911565b816040528651835260208701519150808216821461216157600080fd5b8160208401526121748860408901612027565b60408401528295506121898860808901612027565b945060c087015192508083111561219f57600080fd5b50506121ad86828701612057565b9150509250925092565b6020815281516020820152600060208301516101408060408501526121e0610160850183611ef6565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261221b8382611ef6565b9250506060850151612245608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206122b88187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261232d57600080fd5b9190910192915050565b60006020828403121561234957600080fd5b611d1282611af3565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261238757600080fd5b83018035915067ffffffffffffffff8211156123a257600080fd5b6020019150368190038213156123b757600080fd5b9250929050565b600080858511156123ce57600080fd5b838611156123db57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156124285780818660040360031b1b83161692505b505092915050565b818382376000910190815291905056fea264697066735822122066b8ea95c274d9c51f40d325fe78bd5ac795006bb4f8c376194ad281b04129d264736f6c63430008110033";
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
