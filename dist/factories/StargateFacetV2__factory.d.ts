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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200257338038062002573833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516124d96200009a60003960008181607301526106a001526124d96000f3fe6080604052600436106100345760003560e01c806314d5307714610039578063a6010a661461004e578063fb214c2f14610061575b600080fd5b61004c610047366004611907565b6100be565b005b61004c61005c366004611c4b565b6102cb565b34801561006d57600080fd5b506100957f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447611d39565b905061015585611d4c565b80610100015115610192576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61019b86611d4c565b60a081015173ffffffffffffffffffffffffffffffffffffffff166101ec576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361022a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610267576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61028461027a60a0890160808a01611d58565b8860c001356104c0565b61029e61029088611d4c565b61029988611dc0565b610575565b50479050818111156102bf576102bf6000846102ba8585611d39565b6109eb565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610346576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103573447611d39565b905086806101000151610396576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103b98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103f0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361042e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361046b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b885160c08a015161048491908a8a3360408c0135610a20565b60c08a01526104968961029988611dc0565b50479050818111156104b2576104b26000846102ba8585611d39565b505060009091555050505050565b806000036104fa576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610553578034101561054f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61054f73ffffffffffffffffffffffffffffffffffffffff8316333084610bbb565b610120820151602082015160a001515115159015151415806105ac575081610120015180156105ac5750602081015160c001515115155b156105e3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b816101200151158015610631575080602001516020015160001c73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b15610668576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516040517f5f6d9ae400000000000000000000000000000000000000000000000000000000815261ffff90911660048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f6d9ae4906024016020604051808303816000875af11580156106fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107229190611eec565b905073ffffffffffffffffffffffffffffffffffffffff811661077f5781516040517f420c482e00000000000000000000000000000000000000000000000000000000815261ffff90911660048201526024015b60405180910390fd5b604082015151608084015173ffffffffffffffffffffffffffffffffffffffff166107ba5760c08401516107b39082611f09565b90506108d3565b60808401516040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff84811660248301526000919083169063dd62ed3e90604401602060405180830381865afa158015610835573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108599190611f1c565b90508560c001518110156108d057801561088f5761088f73ffffffffffffffffffffffffffffffffffffffff8316856000610c18565b6108d073ffffffffffffffffffffffffffffffffffffffff8316857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610c18565b50505b60c08401516020840180516040908101929092525181850151606086015192517fcbef2aa900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86169363cbef2aa99386936109469391929091600401611fa3565b60006040518083038185885af1158015610964573d6000803e3d6000fd5b50505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109ab919081019061215e565b5050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516109dd919061221a565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a1557610a108282610c67565b505050565b610a10838383610cd4565b600083808203610a5c576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610a6b600185611d39565b818110610a7a57610a7a61232d565b9050602002810190610a8c919061235c565b610a9d906080810190606001611d58565b90506000610aaa82610d42565b905073ffffffffffffffffffffffffffffffffffffffff8216610ad457610ad13482611d39565b90505b6000610ae08989610d8d565b9050610aec8989610e99565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610b27818b8b85610f06565b600083610b3386610d42565b610b3d9190611d39565b905073ffffffffffffffffffffffffffffffffffffffff8516610b6757610b648882611d39565b90505b8b811015610bab576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d905260248101829052604401610776565b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610c0a57637939f4246000526004601cfd5b600060605260405250505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716610c5d57633e3f8f736000526004601cfd5b6000603452505050565b73ffffffffffffffffffffffffffffffffffffffff8216610cb4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61054f73ffffffffffffffffffffffffffffffffffffffff8316826112f7565b73ffffffffffffffffffffffffffffffffffffffff8216610d21576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a1073ffffffffffffffffffffffffffffffffffffffff84168383611313565b600073ffffffffffffffffffffffffffffffffffffffff821615610d8557610d8073ffffffffffffffffffffffffffffffffffffffff831630611358565b610d87565b475b92915050565b60608160008167ffffffffffffffff811115610dab57610dab611974565b604051908082528060200260200182016040528015610dd4578160200160208202803683370190505b5090506000805b83811015610e8e57868682818110610df557610df561232d565b9050602002810190610e07919061235c565b610e18906080810190606001611d58565b9150610e2382610d42565b838281518110610e3557610e3561232d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e865734838281518110610e6e57610e6e61232d565b60200260200101818151610e829190611d39565b9052505b600101610ddb565b509095945050505050565b60005b81811015610a105736838383818110610eb757610eb761232d565b9050602002810190610ec9919061235c565b9050610edb60e0820160c0830161239a565b15610efd57610efd610ef36060830160408401611d58565b82608001356104c0565b50600101610e9c565b6020840151604085015184918491849083600181146112105760008686610f2e600185611d39565b818110610f3d57610f3d61232d565b9050602002810190610f4f919061235c565b610f60906080810190606001611d58565b9050600089815b8181101561110d57368d8d83818110610f8257610f8261232d565b9050602002810190610f94919061235c565b9050610fc3610fa96060830160408401611d58565b73ffffffffffffffffffffffffffffffffffffffff161590565b806110265750611026610fdc6040830160208401611d58565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561103d575061103d610fdc6020830183611d58565b80156110c257506110c261105460a08301836123b5565b61106391600491600091612421565b61106c9161244b565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6110f8576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51611104908261138d565b50600101610f67565b505060005b61111d600185611d39565b8110156112085760008989838181106111385761113861232d565b905060200281019061114a919061235c565b61115b906080810190606001611d58565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111ff578682815181106111a2576111a261232d565b60200260200101516111b382610d42565b6111bd9190611d39565b9250600073ffffffffffffffffffffffffffffffffffffffff8216156111e45760006111e6565b865b905083156111fd576111fd828a6102ba8488611d39565b505b50600101611112565b5050506112eb565b8760005b818110156112e857368b8b8381811061122f5761122f61232d565b9050602002810190611241919061235c565b9050611256610fa96060830160408401611d58565b8061126f575061126f610fdc6040830160208401611d58565b80156112865750611286610fdc6020830183611d58565b801561129d575061129d61105460a08301836123b5565b6112d3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516112df908261138d565b50600101611214565b50505b50505050505050505050565b60003860003884865af161054f5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610c5d576390b8ec186000526004601cfd5b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6113a261139d6020830183611d58565b61166a565b6113d8576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611418576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061142d610fa96060850160408601611d58565b61143857600061143e565b82608001355b9050600061145a6114556060860160408701611d58565b610d42565b905060006114716114556080870160608801611d58565b9050826000036114a8576114a861148e6060870160408801611d58565b61149e6040880160208901611d58565b8760800135611700565b84608001358210156114f3576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610776565b6000806115036020880188611d58565b73ffffffffffffffffffffffffffffffffffffffff168561152760a08a018a6123b5565b604051611535929190612493565b60006040518083038185875af1925050503d8060008114611572576040519150601f19603f3d011682016040523d82523d6000602084013e611577565b606091505b50915091508161158a5761158a8161172c565b600061159f61145560808a0160608b01611d58565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896115d060208b018b611d58565b6115e060608c0160408d01611d58565b6115f060808d0160608e01611d58565b8c60800135898711611602578661160c565b61160c8a88611d39565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805160178082528183019092526000918291906020820181803683370190505090506017600060208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff00000000000000000000000000000000000000000000000000000000008216016116f757506023015160601c3b151592915050565b5050503b151590565b610a108383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611736565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84161561185f5773ffffffffffffffffffffffffffffffffffffffff831661179f576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611814573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118389190611f1c565b101561185f5761185f73ffffffffffffffffffffffffffffffffffffffff85168483611865565b50505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716610c5d5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716610c5d57633e3f8f736000526004601cfd5b600060a0828403121561190157600080fd5b50919050565b6000806040838503121561191a57600080fd5b823567ffffffffffffffff8082111561193257600080fd5b90840190610140828703121561194757600080fd5b9092506020840135908082111561195d57600080fd5b5061196a858286016118ef565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156119c7576119c7611974565b60405290565b6040805190810167ffffffffffffffff811182821017156119c7576119c7611974565b6040516080810167ffffffffffffffff811182821017156119c7576119c7611974565b60405160e0810167ffffffffffffffff811182821017156119c7576119c7611974565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a7d57611a7d611974565b604052919050565b600067ffffffffffffffff821115611a9f57611a9f611974565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611adc57600080fd5b8135611aef611aea82611a85565b611a36565b818152846020838601011115611b0457600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611b4357600080fd5b50565b8035611b5181611b21565b919050565b80358015158114611b5157600080fd5b60006101408284031215611b7957600080fd5b611b816119a3565b905081358152602082013567ffffffffffffffff80821115611ba257600080fd5b611bae85838601611acb565b60208401526040840135915080821115611bc757600080fd5b50611bd484828501611acb565b604083015250611be660608301611b46565b6060820152611bf760808301611b46565b6080820152611c0860a08301611b46565b60a082015260c082013560c082015260e082013560e0820152610100611c2f818401611b56565b90820152610120611c41838201611b56565b9082015292915050565b60008060008060608587031215611c6157600080fd5b843567ffffffffffffffff80821115611c7957600080fd5b611c8588838901611b66565b95506020870135915080821115611c9b57600080fd5b818701915087601f830112611caf57600080fd5b813581811115611cbe57600080fd5b8860208260051b8501011115611cd357600080fd5b602083019550809450506040870135915080821115611cf157600080fd5b50611cfe878288016118ef565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610d8757610d87611d0a565b6000610d873683611b66565b600060208284031215611d6a57600080fd5b8135611d7581611b21565b9392505050565b803563ffffffff81168114611b5157600080fd5b600060408284031215611da257600080fd5b611daa6119cd565b9050813581526020820135602082015292915050565b600060a08236031215611dd257600080fd5b611dda6119f0565b823561ffff81168114611dec57600080fd5b8152602083013567ffffffffffffffff80821115611e0957600080fd5b818501915060e08236031215611e1e57600080fd5b611e26611a13565b611e2f83611d7c565b8152602083013560208201526040830135604082015260608301356060820152608083013582811115611e6157600080fd5b611e6d36828601611acb565b60808301525060a083013582811115611e8557600080fd5b611e9136828601611acb565b60a08301525060c083013582811115611ea957600080fd5b611eb536828601611acb565b60c083015250602084015250611ed090503660408501611d90565b6040820152611ee160808401611b46565b606082015292915050565b600060208284031215611efe57600080fd5b8151611d7581611b21565b80820180821115610d8757610d87611d0a565b600060208284031215611f2e57600080fd5b5051919050565b60005b83811015611f50578181015183820152602001611f38565b50506000910152565b60008151808452611f71816020860160208601611f35565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6080815263ffffffff8451166080820152602084015160a0820152604084015160c0820152606084015160e08201526000608085015160e0610100840152611fef610160840182611f59565b905060a08601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80808584030161012086015261202c8383611f59565b925060c0880151915080858403016101408601525061204b8282611f59565b92505050612066602083018580518252602090810151910152565b73ffffffffffffffffffffffffffffffffffffffff83166060830152949350505050565b60006040828403121561209c57600080fd5b6120a46119cd565b9050815181526020820151602082015292915050565b6000604082840312156120cc57600080fd5b6120d46119cd565b9050815168ffffffffffffffffff811681146120ef57600080fd5b8152602082015167ffffffffffffffff81111561210b57600080fd5b8201601f8101841361211c57600080fd5b805161212a611aea82611a85565b81815285602083850101111561213f57600080fd5b612150826020830160208601611f35565b602084015250909392505050565b600080600083850360e081121561217457600080fd5b608081121561218257600080fd5b506040516060810167ffffffffffffffff82821081831117156121a7576121a7611974565b81604052865183526020870151915080821682146121c457600080fd5b8160208401526121d7886040890161208a565b60408401528295506121ec886080890161208a565b945060c087015192508083111561220257600080fd5b5050612210868287016120ba565b9150509250925092565b602081528151602082015260006020830151610140806040850152612243610160850183611f59565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261227e8382611f59565b92505060608501516122a8608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061231b8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261239057600080fd5b9190910192915050565b6000602082840312156123ac57600080fd5b611d7582611b56565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126123ea57600080fd5b83018035915067ffffffffffffffff82111561240557600080fd5b60200191503681900382131561241a57600080fd5b9250929050565b6000808585111561243157600080fd5b8386111561243e57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561248b5780818660040360031b1b83161692505b505092915050565b818382376000910190815291905056fea264697066735822122062826eb0181541f0d0850f96c594ad29f470a77094921f341e89ee89074bd63964736f6c63430008110033";
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
